import { SiNodedotjs, SiExpress, SiMysql, SiSupabase, SiReact, SiJavascript, SiTypescript, SiTailwindcss, SiExpo, SiAndroidstudio, SiAndroid, SiVercel } from "react-icons/si";
import { FiServer, FiMonitor, FiSmartphone, FiCloud } from "react-icons/fi";

const technology = (id, name, icon, color, description, category) => ({ id, name, icon, color, description, category });
const supabaseDescription = "Plataforma de desarrollo con base de datos PostgreSQL, autenticación y servicios para aplicaciones.";

export const skillCategories = [
  {
    id: "backend", name: "BACKEND", icon: FiServer, tone: "magenta", node: [11, 8, 8, 6],
    technologies: [
      technology("node", "Node.js", SiNodedotjs, "#83dc31", "Construcción de APIs y servicios con Node.js y arquitectura modular.", "backend"),
      technology("express", "Express.js", SiExpress, "#f7f8ff", "Desarrollo de APIs y rutas de servidor con Express.js sobre Node.js.", "backend"),
      technology("mysql", "MySQL", SiMysql, "#b9daef", "Creación y gestión de bases de datos relacionales con consultas eficientes.", "backend"),
      technology("supabase-backend", "Supabase", SiSupabase, "#3ee58d", supabaseDescription, "backend"),
    ],
  },
  {
    id: "frontend", name: "FRONTEND", icon: FiMonitor, tone: "cyan", node: [33, 8, 8, 6],
    technologies: [
      technology("react", "React", SiReact, "#00dcff", "Construcción de aplicaciones web reactivas y componentes escalables con React.", "frontend"),
      technology("javascript", "JavaScript", SiJavascript, "#ffd43b", "Desarrollo de interfaces dinámicas y experiencias interactivas con JavaScript.", "frontend"),
      technology("typescript", "TypeScript", SiTypescript, "#3187ff", "Desarrollo con tipado estático para organizar y mantener aplicaciones JavaScript.", "frontend"),
      technology("tailwind", "Tailwind CSS", SiTailwindcss, "#00dcff", "Diseño rápido y responsivo con utilidades CSS modernas en Tailwind.", "frontend"),
    ],
  },
  {
    id: "mobile", name: "MÓVIL", icon: FiSmartphone, tone: "violet", node: [14, 20, 8, 6],
    technologies: [
      technology("expo", "Expo Go", SiExpo, "#f7f8ff", "Uso de Expo Go para explorar y desarrollar aplicaciones dentro de las capacidades de su entorno.", "mobile"),
      technology("android-studio", "Android Studio", SiAndroidstudio, "#89de38", "Entorno de desarrollo para crear, ejecutar y trabajar con aplicaciones Android.", "mobile"),
      technology("android-apk", "Android (APK)", SiAndroid, "#8bdf36", "Empaquetado y distribución de aplicaciones Android mediante archivos APK.", "mobile"),
    ],
  },
  {
    id: "deployment", name: "HERRAMIENTAS Y DESPLIEGUE", icon: FiCloud, tone: "cyan", node: [32, 20, 9, 6],
    technologies: [
      technology("vercel", "Vercel (Hosting)", SiVercel, "#ffffff", "Alojamiento y despliegue de aplicaciones web con Vercel.", "deployment"),
      technology("supabase-database", "Supabase (Base de datos)", SiSupabase, "#3ee58d", supabaseDescription, "deployment"),
    ],
  },
];
