import { NextRequest, NextResponse } from "next/server";

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY!;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID!;
const AIRTABLE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}`;

async function airtableFetch(path: string, options: RequestInit = {}) {
  const res = await fetch(`${AIRTABLE_URL}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      "Content-Type": "application/json",
      ...options.headers,
    },
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Airtable error: ${err}`);
  }
  return res.json();
}

async function findOrCreateCliente(nombre: string, telefono: string, email?: string) {
  // Buscar cliente existente por teléfono
  const search = await airtableFetch(
    `/Clientes?filterByFormula=${encodeURIComponent(`{Teléfono}='${telefono}'`)}&maxRecords=1`
  );

  if (search.records?.length > 0) {
    return search.records[0].id;
  }

  // Crear nuevo cliente
  const created = await airtableFetch("/Clientes", {
    method: "POST",
    body: JSON.stringify({
      fields: {
        Nombre: nombre,
        Teléfono: telefono,
        ...(email ? { Email: email } : {}),
        "Primera visita": new Date().toISOString().split("T")[0],
      },
    }),
  });

  return created.id;
}

export async function POST(req: NextRequest) {
  try {
    const { nombre, telefono, email, servicio, fecha, hora, notas } = await req.json();

    if (!nombre || !telefono || !servicio || !fecha || !hora) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 });
    }

    // 1. Buscar o crear cliente
    const clienteId = await findOrCreateCliente(nombre, telefono, email);

    // 2. Crear cita
    await airtableFetch("/Citas", {
      method: "POST",
      body: JSON.stringify({
        fields: {
          Cliente: [clienteId],
          Servicio: servicio,
          Fecha: fecha,
          Hora: hora,
          Estado: "Pendiente",
          ...(notas ? { Notas: notas } : {}),
        },
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error creando reserva:", error);
    return NextResponse.json({ error: "Error al crear la reserva" }, { status: 500 });
  }
}
