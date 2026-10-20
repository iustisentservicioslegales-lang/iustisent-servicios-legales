export const SERVICES = [
  {
    id: 'derecho-familia',
    title: 'Derecho de Familia',
    image: '/images/derecho-familia.png',
    alt: 'Figuras doradas de una familia sobre un libro de Derecho de Familia junto a dos anillos',
    text: 'Sabemos que los conflictos familiares generan desgaste emocional; por ello, estructuramos cada proceso con metodología organizada y ágil que prioriza tu tranquilidad y busca soluciones eficientes; acompañándote integralmente en momentos decisivos relacionados con fijación, incremento, disminución o extinción de alimentos; planteamiento de régimen de visitas, tenencia y procesos de divorcio, protegiendo tus derechos y los de tus hijos.',
    quote: 'Cada caso se analiza con especial cuidado para diseñar una defensa a la medida',
  },
  {
    id: 'derecho-transito',
    title: 'Derecho de Tránsito',
    image: '/images/derecho-transito.png',
    alt: 'Agente de tránsito junto a una motocicleta policial, un semáforo y un radar en una carretera de montaña',
    text: 'Te ayudamos a estructurar defensas técnicas y sólidas para la impugnación de multas impuestas por boleta o fotorradar, así como en la gestión de prescripciones de sanciones que ya hayan caducado en el tiempo. Estudiamos las particularidades de tu infracción de forma independiente para diseñar tu defensa jurídica y ofrecerte soluciones prácticas que reduzcan el estrés y la carga económica.',
    quote: 'Recibes el acompañamiento de profesionales preparados para defenderte',
  },
  {
    id: 'derecho-empresarial',
    title: 'Derecho Empresarial',
    image: '/images/derecho-empresarial.jpg',
    alt: 'Dos empresarios estrechando la mano sobre un escritorio con contratos firmados',
    text: 'Te acompañamos de forma integral en procesos críticos como la constitución formal de compañías, el registro y protección estratégica de tu marca, y la obtención de los permisos necesarios para operar con total tranquilidad.  Estudiamos las particularidades de tu emprendimiento para plantear estructuras corporativas inteligentes que cumplan estrictamente con las exigencias legales y se alineen perfectamente con tu negocio.',
    quote: 'Asesoría que se adapta a las necesidades de tu empresa.',
  },
  {
    id: 'derecho-notarial',
    title: 'Derecho Notarial, Registral e Inmobiliario',
    image: '/images/derecho-notarial.png',
    alt: 'Maqueta de casa junto a una escritura con sello y la sombra de la dama de la justicia',
    text: 'Te acompañamos de principio a fin en asesoría preventiva para la adquisición segura de inmuebles, gestión notarial y de registros de: contratos de compraventa, constitución y levantamiento de hipotecas o patrimonio familiar, donaciones y partición de herencias; así como también en la elaboración de todo tipo escrituras, poderes, contratos, apostillas y declaraciones juramentadas.',
    quote: 'La gestión de tus escrituras y demás documentos garantizada',
  },
  {
    id: 'asesoria-iglesias',
    title: 'Asesoría Legal para Iglesias',
    image: '/images/asesoria-iglesias.png',
    alt: 'Santa Biblia sobre una carpeta con estatutos legales, pluma y sello',
    text: 'Te acompañamos paso a paso en procesos cruciales como la obtención de personerías jurídicas, la redacción o actualización de estatutos, el registro de representantes legales y la gestión formal del incremento o disminución de miembros. Cada trámite se ejecuta con un enfoque técnico avanzado, asegurando que los libros, registros y actos administrativos cumplan rigurosamente con todas las exigencias de ley, para que tu iglesia cuente con un blindaje legal sólido y permanente en el tiempo',
    quote: 'Tratamos cada caso con la atención y el respeto que tu comunidad merece',
  },
  {
    id: 'asesoria-deportiva',
    title: 'Asesoría legal deportiva',
    image: '/images/asesoria-deportiva.png',
    alt: 'Balón de fútbol, pelota de tenis, libro y balanza de la justicia sobre el césped de un estadio',
    text: 'Orientación jurídica para deportistas y atletas. Abordamos cada consulta comprendiendo que el derecho deportivo es amplio y nada convencional, requiriendo el manejo de especialistas en el tema, para que tus derechos como deportista sean garantizados y exigidos en las instancias y tribunales adecuados, recordando que el deporte no siempre se maneja en instancias judiciales, sino también arbitrales.',
    quote: 'Protección legal para decisiones dentro y fuera del campo.',
  },
]

export const STEPS = [
  {
    id: 'paso-cotizar',
    title: 'Haz clic en cotizar',
    text: 'Al presionar el botón COTIZAR, abrirás una conversación directa en Whatsapp con nuestro equipo legal.',
  },
  {
    id: 'paso-caso',
    title: 'Cuéntanos brevemente tu caso',
    text: 'Envíanos un mensaje describiendo de forma general cuál es tu situación actual',
  },
  {
    id: 'paso-evaluacion',
    title: 'Evaluación previa',
    text: 'Analizaremos los puntos clave que nos compartas para determinar el enfoque que requiere tu caso y definir los honorarios profesionales.',
  },
  {
    id: 'paso-cita',
    title: 'Coordinamos tu cita',
    text: 'Acordados los detalles, coordinaremos tu consulta especializada (presencial o en línea), brindándote un espacio seguro, confidencial.',
  },
]

export const CONTACT = {
  email: 'iustisent.servicios.legales@gmail.com',
  phones: ['0984404707', '0995199458'],
  address: 'Ángel Jadán y Luis Ortega',
}

export type SearchEntry = {
  id: string
  section: string
  title: string
  text: string
}

export const SEARCH_INDEX: SearchEntry[] = [
  {
    id: 'como-cotizar',
    section: 'Áreas de servicio',
    title: '¿Cómo cotizar a través de WhatsApp para posterior consulta?',
    text: 'Áreas de servicio cotizar WhatsApp consulta',
  },
  ...STEPS.map((step) => ({ id: step.id, section: 'Cómo cotizar', title: step.title, text: step.text })),
  ...SERVICES.map((service) => ({
    id: service.id,
    section: 'Servicios',
    title: service.title,
    text: `${service.text} ${service.quote}`,
  })),
  {
    id: 'contacto',
    section: 'Hablemos de tu caso',
    title: 'El primer paso hacia una solución empieza con una conversación.',
    text: 'Cuéntanos tu situación. Te orientaremos con claridad y sin lenguaje innecesariamente complejo. Solicitar consulta contacto',
  },
  {
    id: 'datos-contacto',
    section: 'Contacto',
    title: 'Correo, teléfonos y dirección',
    text: `${CONTACT.email} correo email ${CONTACT.phones.join(' ')} teléfono celular ${CONTACT.address} dirección ubicación`,
  },
]
