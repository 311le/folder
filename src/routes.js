export const appSections = [
  { label: "Inicio", id: "view1", path: "/" },
  { label: "Proyectos", id: "projects", path: "/proyectos" },
  { label: "Habilidades", id: "skills", path: "/habilidades" },
  { label: "Contacto", id: "contact", path: "/contacto" },
];

export const normalizePath = (path) => {
  if (!path || path === "/") return "/";
  return path.replace(/\/+$/, "");
};

export const getSectionByPath = (path) => {
  const normalizedPath = normalizePath(path);
  return (
    appSections.find((section) => section.path === normalizedPath) ??
    appSections[0]
  );
};
