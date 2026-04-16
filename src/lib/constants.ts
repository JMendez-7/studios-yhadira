export const WHATSAPP_NUMBER = "+51956526721";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20cita%20en%20Studios%20Yhadira.`;

export interface Service {
  name: string;
  duration?: string;
  price: number;
  description?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  services: Service[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "lashes",
    title: "Extensiones de Pestañas",
    services: [
      {
        name: "Clásicas",
        duration: "2h",
        price: 60,
        description: "Look natural y elegante, una extensión por pestaña natural.",
      },
      {
        name: "Híbridas",
        duration: "2h",
        price: 70,
        description: "Mezcla de técnica clásica y volumen para mayor densidad.",
      },
      {
        name: "Efecto Rimel",
        duration: "2h",
        price: 80,
        description: "Aspecto de máscara de pestañas, lleno y definido.",
      },
      {
        name: "Volumen Ruso",
        duration: "2h",
        price: 90,
        description: "Abanico de 3-6 extensiones por pestaña para máximo volumen.",
      },
      {
        name: "Mega Volumen",
        duration: "2h",
        price: 100,
        description: "Abanico ultra denso para el look más dramático.",
      },
      {
        name: "Foxy / Eyeliner",
        duration: "2h",
        price: 85,
        description: "Efecto cat-eye con mayor longitud en las puntas.",
      },
      {
        name: "Anime",
        duration: "2h",
        price: 95,
        description: "Estilo soñado con puntas largas y dramáticas.",
      },
    ],
  },
  {
    id: "makeup",
    title: "Maquillaje",
    services: [
      {
        name: "Social",
        price: 65,
        description: "Ideal para eventos, cenas y salidas especiales.",
      },
      {
        name: "Blindado",
        price: 80,
        description: "Alta duración, perfecto para largas jornadas.",
      },
      {
        name: "Novias / XV Años",
        price: 100,
        description: "Tu día especial merece el mejor maquillaje. Incluye kit de retoque.",
      },
      {
        name: "Prueba de Maquillaje",
        price: 75,
        description: "Sesión previa para definir el look. Incluye kit de retoque.",
      },
    ],
  },
  {
    id: "massages",
    title: "Masajes con Piedras Calientes",
    services: [
      {
        name: "Espalda",
        price: 70,
        description: "Alivio profundo de tensiones en espalda, cuello y hombros.",
      },
      {
        name: "Cuerpo Completo",
        price: 90,
        description: "Relajación total de pies a cabeza con piedras volcánicas.",
      },
    ],
  },
  {
    id: "other",
    title: "Otros Servicios",
    services: [
      {
        name: "Masajes Reductores",
        price: 50,
        description: "Por sesión. Moldea y tonifica con técnicas especializadas.",
      },
      {
        name: "Microblading",
        price: 0,
        description: "Consulta para precio. Diseño y pigmentación de cejas a mano.",
      },
      {
        name: "BB Glow",
        price: 0,
        description: "Consulta para precio. Efecto base semipermanente y luminoso.",
      },
      {
        name: "Limpieza Facial",
        price: 0,
        description: "Consulta para precio. Limpieza profunda con aparatología profesional.",
      },
    ],
  },
];

export interface Differentiator {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const DIFFERENTIATORS = [
  {
    id: "equipment",
    icon: "Sparkles",
    title: "Aparatología Profesional",
    description:
      "Utilizamos equipos de última generación para garantizar resultados superiores y duraderos en cada tratamiento.",
  },
  {
    id: "certification",
    icon: "Award",
    title: "Certificación Profesional",
    description:
      "Nuestro equipo está certificado y en constante actualización para ofrecerte las técnicas más avanzadas del mercado.",
  },
  {
    id: "atmosphere",
    icon: "Heart",
    title: "Ambiente Agradable",
    description:
      "Un espacio diseñado para tu confort y relajación, donde cada visita se convierte en una experiencia única.",
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "pre" | "post";
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "pre-lashes",
    question: "Antes de extensiones de pestañas",
    answer:
      "Llega sin maquillaje en los ojos y sin rímel. Evita cremas o aceites alrededor del área ocular el día de tu cita. Si usas lentes de contacto, retíralos antes del servicio.",
    category: "pre",
  },
  {
    id: "pre-facial",
    question: "Antes de tu facial",
    answer:
      "Llega sin maquillaje para optimizar los resultados del tratamiento. Comunica cualquier alergia o sensibilidad en la piel al momento de la consulta.",
    category: "pre",
  },
  {
    id: "pre-massage",
    question: "Antes de tu masaje",
    answer:
      "Evita comer en exceso 1 hora antes de tu sesión. Llega puntual para disfrutar el tiempo completo de tu tratamiento.",
    category: "pre",
  },
  {
    id: "post-lashes",
    question: "Después de extensiones de pestañas",
    answer:
      "No mojes las pestañas durante las primeras 24 horas. Evita el vapor, saunas y piscinas. No uses rímel ni desmaquillante con aceite. Cepilla suavemente con el cepillito proporcionado.",
    category: "post",
  },
  {
    id: "post-massage",
    question: "Después de tu masaje",
    answer:
      "No te bañes durante las primeras 3 horas para que los aceites esenciales terminen de actuar. Hidrátate bien bebiendo agua. Evita actividad física intensa el mismo día.",
    category: "post",
  },
  {
    id: "post-facial",
    question: "Después de tu facial",
    answer:
      "Evita el sol directo durante las primeras 24 horas. Aplica protector solar al salir. No uses productos con ácidos fuertes los 2 días siguientes.",
    category: "post",
  },
];

export const POLICIES = [
  {
    id: "deposit",
    icon: "CreditCard",
    title: "Reservación con Depósito",
    description:
      "Para confirmar tu cita se requiere un depósito del 50% del servicio. Este depósito se aplica al total de tu tratamiento.",
  },
  {
    id: "cancellation",
    icon: "Clock",
    title: "Política de Cancelaciones",
    description:
      "Si necesitas cancelar o reprogramar, avísanos con al menos 2 horas de antelación. Las cancelaciones sin previo aviso o con menos de 2 horas no son elegibles para reembolso del depósito.",
  },
];

export const SOCIAL_LINKS = [
  {
    id: "instagram",
    label: "Instagram",
    icon: "Instagram",
    url: "https://www.instagram.com/studio_yhadira?igsh=YTAyMG5ndTh5ZGx2",
  },
  {
    id: "facebook",
    label: "Facebook",
    icon: "Facebook",
    url: "https://www.facebook.com/yhadira.zuzunaga",
  },
  {
    id: "tiktok",
    label: "TikTok",
    icon: "ExternalLink",
    url: "https://tiktok.com/@studiosyhadira",
  },
];

export const SCHEDULE = {
  days: "Lunes a Domingo",
  hours: "9:00 am – 8:00 pm",
};

export const LOCATION = {
  city: "Barranca",
  country: "Perú",
  display: "Barranca, Perú",
};

export const NAV_LINKS = [
  { label: "Servicios", href: "/servicios" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];
