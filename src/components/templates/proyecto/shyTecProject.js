import ShyTecImage from "../../styles/images/shytec-soluciones.webp";

const shyTecProject = {
  "id": "shy-tec",
  "img": ShyTecImage,
  "name": "ShyTec Soluciones",
  "title": "Sitio Web Corporativo – ShyTec Soluciones",
  "summary": "Sitio corporativo para presentar servicios de software, planes y soluciones, y captar clientes mediante un formulario de contacto.",
  "subtitle": "Rol: Desarrollador Full Stack · Tipo de proyecto: Aplicación web corporativa / Landing Page profesional · Estado: Proyecto funcional y preparado para despliegue en producción.",
  "desc": "Desarrollé el sitio web corporativo de ShyTec Soluciones, empresa enfocada en desarrollo de software, aplicaciones web, sistemas empresariales y soluciones tecnológicas personalizadas.\n\nEl proyecto fue diseñado para presentar de manera profesional los servicios de la empresa, explicar su propuesta de valor, mostrar las tecnologías utilizadas, presentar planes y soluciones y proporcionar un canal directo para captar potenciales clientes.\n\nLa aplicación fue desarrollada con una arquitectura moderna, modular y escalable, priorizando rendimiento, experiencia de usuario, reutilización de componentes y adaptación a diferentes dispositivos.",
  "sections": [
    {
      "title": "Finalidad del proyecto",
      "paragraphs": [
        "El objetivo principal fue crear una presencia digital profesional para ShyTec Soluciones y convertir el sitio web en una herramienta comercial, no únicamente en una página informativa.",
        "La plataforma permite:",
        "• Presentar los servicios tecnológicos de la empresa.\n• Explicar la metodología y propuesta de valor.\n• Mostrar tecnologías y capacidades técnicas.\n• Presentar modalidades de desarrollo y planes de servicio.\n• Facilitar la navegación hacia diferentes áreas de información.\n• Captar clientes mediante un formulario de contacto funcional.\n• Adaptarse correctamente a dispositivos móviles, tablets y escritorio.\n• Servir como base escalable para futuras integraciones con sistemas, APIs y servicios empresariales."
      ]
    },
    {
      "title": "Desarrollo Frontend",
      "paragraphs": [
        "El frontend fue desarrollado utilizando React 18, TypeScript y Vite, permitiendo crear una interfaz rápida, mantenible y basada en componentes reutilizables.",
        "La interfaz se organizó siguiendo principios de Atomic Design, separando elementos en:",
        "Atoms: botones, iconos, imágenes responsivas, elementos gráficos y componentes básicos.",
        "Molecules: elementos que agrupan componentes pequeños, como beneficios, tecnologías y características de servicios.",
        "Organisms: estructuras más complejas como barras de beneficios, redes de servicios, visualización de dispositivos y secciones completas.",
        "Templates: estructuras reutilizables encargadas de organizar diferentes componentes dentro de la interfaz.",
        "Esta organización permite modificar o ampliar el sistema sin tener que reconstruir componentes completos.",
        "Para los estilos se utilizaron Tailwind CSS y CSS personalizado, construyendo una identidad visual tecnológica basada principalmente en azul oscuro, azul eléctrico, blanco y tonalidades neutras.",
        "También se implementaron:",
        "• Diseño completamente responsive.\n• Menú de navegación para escritorio y dispositivos móviles.\n• React Router para gestión de rutas.\n• Navegación mediante scroll suave entre secciones.\n• Detección de la sección activa durante el desplazamiento.\n• Animaciones utilizando IntersectionObserver.\n• Componentes gráficos mediante Lucide React.\n• Estados interactivos para botones y formularios.\n• Buenas prácticas básicas de accesibilidad mediante atributos ARIA."
      ]
    },
    {
      "title": "Optimización y rendimiento",
      "paragraphs": [
        "Se trabajó también en la optimización de recursos visuales.",
        "Las imágenes principales utilizan formatos WebP, diferentes resoluciones y atributos srcSet y sizes, permitiendo que el navegador descargue una versión adecuada dependiendo del dispositivo.",
        "También se aplicaron estrategias de carga como:",
        "• Lazy loading para recursos secundarios.\n• Carga prioritaria para imágenes importantes del Hero.\n• Dimensiones explícitas de imágenes para reducir cambios de diseño durante la carga.\n• Componentes reutilizables para imágenes responsivas.",
        "Esto permite reducir el peso transferido y mejorar la experiencia de navegación."
      ]
    },
    {
      "title": "Integraciones y funcionalidad",
      "paragraphs": [
        "Se implementó un formulario de contacto completamente funcional utilizando EmailJS, permitiendo que un visitante envíe una solicitud directamente desde la página sin abandonar el sitio.",
        "El formulario incluye:",
        "• Nombre.\n• Correo electrónico.\n• Empresa.\n• Mensaje.\n• Validación mediante campos obligatorios.\n• Manejo del proceso de envío.\n• Estado visual de mensaje enviado.\n• Manejo de errores.",
        "La arquitectura tecnológica del proyecto también contempla integración con Supabase, PostgreSQL, APIs REST y servicios backend, permitiendo evolucionar el sitio hacia aplicaciones empresariales y plataformas SaaS.",
        "En esta versión concreta del sitio corporativo, la funcionalidad interactiva principal está implementada desde React y EmailJS; Supabase aparece preparado dentro del stack tecnológico, pero no existe en este repositorio una implementación completa de lógica backend propia."
      ]
    },
    {
      "title": "Arquitectura y despliegue",
      "paragraphs": [
        "El proyecto utiliza Vite como herramienta de desarrollo y compilación y está preparado para despliegue mediante Vercel.",
        "Se configuraron reglas de reescritura para permitir que React Router funcione correctamente como Single Page Application.",
        "También se incorporaron elementos relacionados con posicionamiento y publicación web como:",
        "• robots.txt\n• sitemap.xml\n• Open Graph image.\n• Manifest de aplicación.\n• Favicons para diferentes dispositivos.\n• Archivo de verificación para Google."
      ]
    },
    {
      "title": "Tecnologías utilizadas",
      "paragraphs": [
        "Frontend: React, TypeScript, JavaScript, HTML5, CSS3 y Tailwind CSS.",
        "Arquitectura: Atomic Design y componentes reutilizables.",
        "Navegación: React Router DOM.",
        "UI: Lucide React y componentes personalizados.",
        "Integraciones: EmailJS.",
        "Backend / infraestructura preparada: Supabase, PostgreSQL y APIs REST.",
        "Herramientas: Git, GitHub, Vite, npm y ESLint.",
        "Cloud / Deploy: Vercel."
      ]
    },
    {
      "title": "Trabajo realizado como desarrollador Full Stack",
      "paragraphs": [
        "Durante el desarrollo trabajé en la planificación de la arquitectura, diseño de componentes, implementación de la interfaz, navegación, responsividad, optimización de recursos, integración de servicios externos y preparación del proyecto para producción.",
        "El desarrollo se planteó considerando no solamente la apariencia visual, sino también mantenibilidad, escalabilidad y futuras integraciones con servicios backend, bases de datos y plataformas empresariales.",
        "Esto permitió construir una base tecnológica que puede evolucionar desde un sitio corporativo hacia soluciones más completas como sistemas administrativos, aplicaciones SaaS, inventarios, dashboards y plataformas empresariales."
      ]
    },
    {
      "title": "Resumen del proyecto",
      "paragraphs": [
        "ShyTec Soluciones es una aplicación web corporativa moderna desarrollada con React, TypeScript y Vite, estructurada mediante componentes reutilizables y principios de Atomic Design.",
        "El proyecto combina diseño responsive, optimización de imágenes, navegación dinámica, animaciones, formulario de contacto funcional, configuración para Vercel y una arquitectura preparada para futuras integraciones backend.",
        "Su finalidad es proporcionar una presencia digital profesional para una empresa de desarrollo de software y, al mismo tiempo, funcionar como una herramienta para presentar servicios, generar confianza y captar nuevos clientes.",
        "El proyecto demuestra conocimientos de desarrollo frontend moderno, arquitectura de componentes, integración de servicios, optimización web, despliegue cloud y planificación de aplicaciones escalables desde una perspectiva Full Stack."
      ]
    }
  ],
  "link": "https://shy-tec-eta.vercel.app/",
  "rol": "Desarrollador Full Stack",
  "etiquetas": [
    "React 18",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Atomic Design",
    "React Router DOM",
    "Lucide React",
    "EmailJS",
    "Vite",
    "Git",
    "GitHub",
    "npm",
    "ESLint",
    "Vercel"
  ],
  "previewTechnologies": [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "EmailJS"
  ]
};

export default shyTecProject;
