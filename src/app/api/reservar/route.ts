import { NextRequest, NextResponse } from "next/server";

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY!;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID!;

async function airtableFetch(table: string, options: RequestInit = {}) {
  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(table)}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      "Content-Type": "application/json",
      ...options.headers,
    },
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Airtable error (${table}): ${err}`);
  }
  return res.json();
}

export async function POST(req: NextRequest) {
  try {
    const { nombre, telefono, email, servicio, fecha, hora, notas } = await req.json();

    if (!nombre || !telefono || !servicio || !fecha || !hora) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 });
    }

    // 1. Crear cliente
    const cliente = await airtableFetch("Clientes", {
      method: "POST",
      body: JSON.stringify({
        fields: {
          Nombre: nombre,
          ...(telefono ? { "Teléfono": telefono } : {}),
          ...(email ? { Email: email } : {}),
          "Primera visita": new Date().toISOString().split("T")[0],
        },
      }),
    });

    // 2. Crear cita vinculada al cliente
    await airtableFetch("Citas", {
      method: "POST",
      body: JSON.stringify({
        fields: {
          Cliente: [cliente.id],
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
