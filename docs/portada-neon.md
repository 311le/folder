# Portada neón

## Implementación

Portada con fondo fotográfico, editor decorativo a la derecha, menú flotante,
textos HTML, badges y botones accesibles. En móvil el menú se compacta y el
editor se coloca debajo del contenido. Las fuentes Archivo Black, Bebas Neue
y Girassol se sirven localmente con `font-display: swap`.

El carrusel conserva las tres imágenes originales y sus posiciones responsive.
Se eliminó `programming-skills.svg` del carrusel y de los recursos públicos.
La primera fotografía es la imagen inicial y su precarga coincide con el carrusel. El intervalo es de
5200 ms. Se puede seleccionar cada imagen y pausar el avance; este también se
detiene al enfocar controles, ocultar la pestaña o solicitar movimiento reducido.
La transición mantiene el fondo anterior hasta que el siguiente haya cargado.

«Ver proyectos» usa la ruta existente `/proyectos`. «Sobre mí» abre la información
personal en un diálogo. Su botón «Ver CV» abre en otra pestaña el enlace:

https://1drv.ms/b/c/5617855348bc76db/IQA7Oei3UKlyQZm4lm45nt5jAZtus7FuC5wbdIttkKa2s6o?e=TY9h4Z

## Imágenes sin pérdida

| Recurso | Dimensiones originales | PNG | WebP | Comparación RGBA |
| --- | --- | --- | --- | --- |
| neon-background.webp | 1672 × 941 | 1 590 802 bytes | 1 076 222 bytes | Idénticos |
| neon-code-editor.webp | 1448 × 1086 | 1 666 209 bytes | 1 033 220 bytes | Idénticos |

Archivos finales en `public/assets/hero/`. Se conservaron los PNG originales en
`src/components/styles/images/`. No hubo recorte, redimensionado ni regeneración.
El editor se convirtió con `cwebp -lossless -exact -m 6 -metadata all` para
preservar también los colores de los píxeles totalmente transparentes.
Ambos resultados se decodificaron y compararon byte a byte en RGBA con los originales.

Documentación de la conversión: https://developers.google.com/speed/webp/docs/cwebp

## Archivos y reutilización

- `src/components/templates/vistaPrincipal/View1.jsx`: composición del hero y editor.
- `src/components/molecules/Images.jsx`: carrusel existente, carga progresiva y controles.
- `src/components/molecules/GridComponent.jsx`: contenido y acciones del hero.
- `src/components/molecules/ActionButton.jsx`: CTA hacia proyectos usando MUI y React Router.
- `src/components/organisms/PersonalInfoButton.jsx`: botón accesible para el CV.
- `src/components/organisms/Menu.jsx`: presentación del menú flotante.
- `src/components/atoms/ButtonMenu.jsx`: iconos, estados activos y navegación existente.
- `src/components/atoms/TextAtom.jsx`: semántica configurable y tokens tipográficos.
- `src/components/molecules/LinkedInButton.jsx`: etiqueta accesible y apertura segura.
- `src/components/pages/Page1.jsx`: espacio del menú y respeto al movimiento reducido.
- `src/components/styles/HomePage.css`: estilos de la portada y del menú.
- `src/index.css`: fuentes locales y tokens compartidos.
- `src/index.jsx`: carga de estilos globales.
- `index.html`: idioma, metadatos y precarga del fondo y fuente principal.
- `public/assets/hero/`: los dos WebP.
- `public/assets/fonts/`: tres WOFF2 y sus licencias OFL.

Se reutilizaron los componentes anteriores y `ContainerComponent`. No se crearon
componentes React nuevos. Los antiguos imports a un átomo `Button` inexistente
en ActionButton y PersonalInfoButton se reemplazaron por el Button de MUI instalado.
Se mantuvieron `ActiveSectionContext`, `appSections`, React Router y react-scroll.

No se modificaron package.json, package-lock.json ni las versiones de las dependencias
durante esta implementación. Las herramientas de conversión y verificación se
instalaron temporalmente dentro de `.vite-cache/`, que está excluido de Git.

Fuentes obtenidas desde Google Fonts y su repositorio oficial:
https://github.com/google/fonts

## Verificación

- `npm run build`: correcto.
- Pruebas locales con Chrome headless: carrusel automático y selección de las tres imágenes.
- CTA de proyectos y navegación Inicio, Habilidades y Contacto: correctos.
- La comprobación histórica del enlace directo al CV corresponde a una versión anterior; ahora se muestra dentro del diálogo de información personal.
- Tamaños 360, 390, 430, 768, 1024, 1280, 1440 y 1920 px: sin desbordamiento horizontal ni solapamiento del hero.
- Fuentes locales cargadas; movimiento reducido respetado y desplazamiento móvil con margen de 96 px.
- Consola del navegador: sin errores en la ejecución final.
- Capturas inspeccionadas de escritorio y móvil; capturas adicionales y resultados locales en `.vite-cache/`.

El antiguo `dist` tenía permisos que bloqueaban la compilación. Se conservó en
`.vite-cache/dist-before-neon/` y se generó un `dist` nuevo, sin cambiar la
configuración de salida. La compilación mantiene una advertencia de tamaño del
bundle principal (aproximadamente 599 kB; 189 kB gzip), ya existente antes de este trabajo.
Las secciones existentes también emiten advertencias de MUI Grid por props antiguas
(`item`, `xs`, `sm`, `md`, `lg`); no se modificaron esos componentes ajenos a la portada.

No se enviaron mensajes desde el formulario ni se desplegó el sitio. No se recibió
una imagen independiente de la composición completa: el diseño se construyó con
las dos piezas originales y las instrucciones visuales del documento adjunto.

Para ejecutar localmente desde la raíz `folder`: `npm run dev`.
