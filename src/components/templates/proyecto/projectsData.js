import ProyectoUno from "../../styles/images/proyectouno.jpg";
import MiNegocio from "../../styles/images/mi-negocio.webp";
import shyTecProject from "./shyTecProject";

// Add projects to this collection only with a real screenshot and verified data.
export const projects = [
  {
    id: "anacospii",
    img: ProyectoUno,
    name: "AnacosπPii",
    title: "AnacosπPii — Catálogo y gestión de pedidos",
    summary: "Catálogo responsive de bordados tradicionales otavaleños con carrito de compras y gestión de pedidos por correo electrónico.",
    desc:
      "AnacosπPii es una plataforma web comercial desarrollada para digitalizar la presentación y gestión de pedidos de un taller dedicado a bordados tradicionales para anacos, fachalinas y rebosos de la vestimenta femenina otavaleña.\n\nEl proyecto fue desarrollado con React.js, utilizando Material UI para la interfaz y una arquitectura basada en Atomic Design, separando la aplicación en átomos, moléculas, organismos, plantillas y páginas. Esto permitió crear componentes reutilizables y mantener una estructura organizada y escalable.\n\nEn el frontend se implementó un catálogo responsive de productos con imágenes, precios y descripciones, visualización detallada mediante modales, carruseles de imágenes, navegación entre secciones y animaciones utilizando Framer Motion. También se desarrolló un carrito de compras administrado mediante React Context, permitiendo agregar y eliminar productos, calcular automáticamente el total y generar el resumen del pedido.\n\nEl flujo de compra conecta el carrito con un formulario de cliente donde se recopilan los datos necesarios y se genera automáticamente el detalle de los productos seleccionados. Para complementar el proceso se integraron EmailJS para el envío de pedidos por correo electrónico y Google reCAPTCHA para validar los formularios y reducir envíos automatizados.\n\nLa interfaz fue adaptada para computadoras, tablets y dispositivos móviles mediante breakpoints y componentes responsive de Material UI. También se implementó navegación dinámica con React Scroll, persistencia temporal de información mediante LocalStorage y componentes interactivos reutilizables.",
    sections: [
      {
        title: "Finalidad",
        paragraphs: ["El objetivo del proyecto fue transformar un proceso tradicional de exhibición y recepción de pedidos en una experiencia digital, permitiendo que los clientes conozcan los diseños disponibles, consulten sus características, seleccionen productos y generen un pedido desde una misma aplicación web."],
      },
      {
        title: "Tecnologías utilizadas",
        paragraphs: ["React.js · JavaScript · Material UI · React Context · Atomic Design · Framer Motion · React Scroll · React Slick · EmailJS · Google reCAPTCHA · LocalStorage · CSS · Vercel"],
      },
      {
        title: "Rol como desarrollador",
        paragraphs: [
          "Desarrollo Full Stack / Frontend: diseño de arquitectura de componentes, construcción de interfaz responsive, gestión del estado del carrito, lógica del flujo de pedidos, validación de formularios, integración con servicios externos y preparación de la aplicación para despliegue web.",
          "El código analizado concentra la lógica principalmente en el frontend y utiliza servicios externos como EmailJS y reCAPTCHA; no se observa en este proyecto un backend propio con API y base de datos.",
        ],
      },
    ],
    link: "https://webpi.vercel.app",
    rol: "Desarrollo Full Stack / Frontend",
    etiquetas: ["React.js", "JavaScript", "Material UI", "React Context", "Atomic Design", "Framer Motion", "React Scroll", "React Slick", "EmailJS", "Google reCAPTCHA", "LocalStorage", "CSS", "Vercel"],
    previewTechnologies: ["React.js", "Material UI", "React Context", "EmailJS"],
    collaboration: true,
  },
  shyTecProject,
  {
    id: "mi-negocio",
    img: MiNegocio,
    name: "Mi Negocio",
    title: "Mi Negocio — Plataforma SaaS de Gestión Empresarial",
    summary: "Plataforma SaaS multiempresa para centralizar inventarios, ventas y operaciones de pequeños y medianos negocios.",
    subtitle: "Desarrollo Full Stack | React · TypeScript · Vite · Material UI · Node.js · Express.js · Supabase · PostgreSQL · REST API",
    desc: "Mi Negocio es una plataforma web SaaS multiempresa diseñada para digitalizar y centralizar la administración de pequeños y medianos negocios. Permite gestionar inventarios, productos, compras, ventas, clientes, empleados, movimientos de stock y operaciones financieras desde una interfaz moderna, intuitiva y adaptable a dispositivos móviles.\n\nEl sistema cuenta con una arquitectura Full Stack de tres capas independientes: base de datos, API REST y frontend, desarrolladas para mantener la integridad de los datos, la seguridad de las operaciones y la escalabilidad de la aplicación.",
    sections: [
      {
        title: "Base de datos — Supabase y PostgreSQL",
        paragraphs: [
          "Diseñé una base de datos relacional utilizando Supabase y PostgreSQL, estructurada para administrar múltiples empresas de manera independiente.",
          "Implementé relaciones entre entidades, restricciones de integridad, funciones SQL, procedimientos almacenados (RPC), triggers y políticas de seguridad a nivel de filas (RLS).",
          "La lógica crítica se ejecuta directamente en la base de datos, incluyendo el control de existencias, cálculos tributarios, costos, validación de operaciones y auditoría. Esto permite proteger la información frente a modificaciones indebidas y mantener un historial confiable de los movimientos empresariales.",
        ],
      },
      {
        title: "Backend — Node.js y Express.js",
        paragraphs: [
          "Desarrollé una API REST con Node.js, Express.js y JavaScript, organizada mediante rutas, controladores, servicios y middlewares.",
          "La API funciona como intermediaria segura entre el frontend y Supabase. Gestiona la autenticación, autorización por roles, validación de solicitudes, acceso a los datos y ejecución de operaciones empresariales.",
          "Implementé mecanismos de seguridad como control de permisos, validaciones, limitación de solicitudes (rate limiting), gestión centralizada de errores y registros de actividad.",
          "Su arquitectura modular permite mantener los servicios separados y facilitar la incorporación de nuevas funcionalidades.",
        ],
      },
      {
        title: "Frontend — React, TypeScript y Vite",
        paragraphs: [
          "Desarrollé la interfaz web utilizando React, TypeScript y Vite, junto con Material UI y estilos personalizados.",
          "Apliqué los principios de Atomic Design para organizar la interfaz en componentes reutilizables, hooks personalizados, servicios de comunicación y módulos independientes.",
          "Diseñé paneles específicos para administradores, encargados y vendedores, con navegación y funcionalidades adaptadas a sus respectivos permisos.",
          "La aplicación incorpora formularios validados, tablas dinámicas, indicadores empresariales y vistas responsive optimizadas para computadoras, tablets y teléfonos móviles.",
          "La comunicación con la API REST permite consultar y actualizar la información del negocio manteniendo separadas la lógica de presentación y las reglas empresariales.",
        ],
      },
      {
        title: "Finalidad del proyecto",
        paragraphs: [
          "El objetivo principal es ofrecer a los negocios una herramienta centralizada para controlar sus operaciones diarias, disminuir errores manuales, proteger sus registros comerciales y facilitar la toma de decisiones mediante información organizada y confiable.",
          "El proyecto también contempla comprobantes internos verificables, trazabilidad de operaciones y análisis financiero, con funcionalidades avanzadas en distintas etapas de integración.",
        ],
      },
      {
        title: "Mi participación",
        paragraphs: ["Desarrollo Full Stack de la arquitectura, modelado de base de datos, lógica SQL, API REST, autenticación y autorización, integración entre servicios y diseño de interfaces responsive."],
      },
      {
        title: "Enfoque técnico",
        paragraphs: ["Arquitectura modular, seguridad multiempresa, reutilización de componentes, integridad de datos, mantenibilidad y escalabilidad."],
      },
    ],
    link: "https://inventarios-frontend-two.vercel.app/login",
    rol: "Desarrollador Full Stack",
    etiquetas: ["React", "TypeScript", "Vite", "Material UI", "Node.js", "Express.js", "Supabase", "PostgreSQL", "REST API"],
    previewTechnologies: ["React", "TypeScript", "Node.js", "Supabase"],
  },
];

// All supplied projects now have real screenshots and complete carousel entries.
export const additionalProjectLinks = [];
