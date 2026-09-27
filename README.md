# Portafolio

Sitio personal hecho con Create React App y publicado en Vercel.

## Desarrollo local

Requiere Node.js 22.

```bash
npm ci
npm start
```

Para comprobar la compilación de producción:

```bash
npm run build
```

## Publicación

El workflow de GitHub Actions en `.github/workflows/deploy.yml` comprueba que las propuestas de cambio y los cambios enviados a `main` compilen correctamente. El proyecto `folder` de Vercel está conectado al repositorio `311le/folder`: Vercel crea despliegues de vista previa para las ramas de trabajo y publica en producción los cambios de `main`.

La validación de GitHub Actions y el despliegue de Vercel se ejecutan de forma independiente tras un push. Para exigir que el build de GitHub Actions pase antes de incorporar una propuesta de cambio, configura una regla de protección para `main` en GitHub que requiera el job `build`.

Los archivos `.env.local`, `.vercel/`, `node_modules/` y `build/` están excluidos de Git. Si el sitio necesita variables de entorno durante el build, configúralas en el proyecto de Vercel para el entorno **Production**.
