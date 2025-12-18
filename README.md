<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Proyecto AGR

AGR es una aplicación diseñada para conectar a agricultores con consumidores, ofreciendo una plataforma intuitiva para la compra y venta de productos agrícolas. Este proyecto utiliza tecnologías modernas como React, TypeScript y Vite para garantizar un rendimiento óptimo y una experiencia de usuario fluida.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Scripts Disponibles](#scripts-disponibles)
- [Inicio Rápido](#inicio-rápido)
- [Tecnologías Usadas](#tecnologías-usadas)
- [Configuración del Proyecto](#configuración-del-proyecto)
- [Solución de Problemas](#solución-de-problemas)
- [Seguridad](#seguridad)

## Descripción

AGR es una solución integral para agricultores y consumidores que buscan una forma eficiente de comercializar productos agrícolas. La aplicación permite explorar productos, gestionar pedidos y suscripciones, y acceder a información relevante sobre la ubicación y los beneficios de los productos.

## Características

- **Exploración de productos agrícolas**: Descubre una amplia variedad de productos directamente de los agricultores.
- **Gestión de pedidos y suscripciones**: Herramientas para realizar pedidos y suscribirse a productos recurrentes.
- **Interfaz optimizada**: Diseñada para ser intuitiva y fácil de usar.
- **Información de ubicación**: Accede a datos sobre la procedencia de los productos.
- **Componentes reutilizables**: Construcción modular para facilitar la escalabilidad.

## Scripts Disponibles

Para iniciar el proyecto, usa los siguientes comandos:

```bash
# Iniciar el servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar en modo producción
npm run preview
```

## Inicio Rápido

1. Asegúrate de tener [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/) instalados.
2. Clona este repositorio.
3. Ejecuta `npm install` para instalar las dependencias.
4. Configura tus claves de API en un archivo `.env.local` (ver [Configuración del Proyecto](#configuración-del-proyecto)).
5. Ejecuta `npm run dev` para iniciar el servidor de desarrollo.
6. Abre tu navegador y ve a `http://localhost:5173`.

## Tecnologías Usadas

- **React**: Biblioteca para construir interfaces de usuario.
- **TypeScript**: Lenguaje para un desarrollo más seguro y escalable.
- **Vite**: Herramienta para desarrollo y construcción rápida de proyectos.
- **CSS Modules**: Para estilos encapsulados y reutilizables.

## Configuración del Proyecto

Antes de instalar, asegúrate de tener:
- **Node.js** (versión 18 o superior) - [Descargar aquí](https://nodejs.org/)
- **npm** (incluido con Node.js)

Instalar dependencias:

```bash
npm install
```

Configurar las variables de entorno en un archivo `.env.local`:

```env
# Configuración de la API
VITE_API_URL=https://tu-api-url.com
```

## Solución de Problemas

Consulta la sección de solución de problemas en este archivo para resolver errores comunes relacionados con dependencias y configuración de entorno.

## Seguridad

- **Nunca** compartas tus claves de API públicamente.
- **No subas** el archivo `.env.local` a repositorios públicos.
- Usa variables de entorno en producción para proteger información sensible.

## 👤 Autor
Equipo AGR
