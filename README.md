# NovaBeats

Reproductor de música local para Linux y Windows desarrollado con Electron.

## Tabla de contenidos

- [Descripción](#descripción)
- [Estado del proyecto](#estado-del-proyecto)
- [Características](#características)
- [Cómo usar](#cómo-usar)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Instalación para desarrollo](#instalación-para-desarrollo)
- [Generar build](#generar-build)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Próximos objetivos](#próximos-objetivos)
- [Feedback](#feedback)
- [Autor](#autor)

---

## Descripción

NovaBeats es un reproductor de música local diseñado para usuarios que prefieren tener el control total de su biblioteca musical sin depender de servicios de streaming.

Con una interfaz limpia y funciones de escritorio, NovaBeats permite cargar carpetas completas o archivos individuales, crear y gestionar playlists, reproducir música con controles avanzados y ver metadatos de las pistas.

El proyecto integra tecnologías web modernas, manipulación del DOM, almacenamiento local y la plataforma Electron para ofrecer una experiencia de escritorio estable y funcional.

---

## Estado del proyecto

**Versión actual:** 1.2.4

NovaBeats es una aplicación funcional apta para uso diario. Actualmente está en fase beta, por lo que pueden existir errores no detectados.

Los reportes de errores, sugerencias y mejoras son bienvenidos.

---

## Características

### Reproducción de audio

- Reproducción de archivos de audio locales.
- Selección de carpetas de música completas.
- Selección de archivos individuales de audio.
- Controles de reproducción: reproducir/pausar, anterior y siguiente.
- Avance automático a la siguiente pista.
- Modo shuffle para mezclar la reproducción.
- Modo repetición con tres estados: sin repetir, repetir toda la lista y repetir una sola canción.
- Control de volumen con slider y valor numérico guardado entre sesiones.
- Barra de progreso y visualización del tiempo de reproducción.
- Navegación compatible con Media Session API (reproducir, pausar, siguiente y anterior).

### Gestión de playlists

- Visualización de la lista de reproducción actual.
- Guardado de playlists personalizadas en almacenamiento local.
- Carga de playlists guardadas.
- Eliminación de playlists almacenadas.
- Alternancia rápida entre la lista activa y las playlists guardadas.

### Interfaz y experiencia de usuario

- Aplicación de escritorio desarrollada con HTML, CSS y JavaScript.
- Botones de ventana: minimizar, modo compacto y cerrar.
- Modo compacto para una vista reducida del reproductor.
- Visualizador de audio animado integrado.
- Animaciones y transiciones suaves con CSS.
- Persistencia de configuraciones de usuario mediante almacenamiento local.

### Información musical

- Lectura de metadatos de archivos de audio.
- Visualización del título de la pista y el artista.
- Visualización de carátulas cuando están disponibles.
- Actualización dinámica de metadatos al cambiar de pista.

---

## Cómo usar

1. Abre NovaBeats.
2. Selecciona una carpeta de música o un archivo de audio.
3. Reproduce, pausa o navega entre pistas con los controles.
4. Ajusta el volumen con el slider.
5. Guarda tu lista de reproducción actual para usarla después.
6. Cambia entre el modo normal y el modo compacto según tu preferencia.

---

## Tecnologías utilizadas

- JavaScript
- HTML5
- CSS3
- Electron
- Node.js
- music-metadata

---

## Instalación para desarrollo

Clonar el repositorio:

```bash
git clone https://github.com/Alejandro-Elias/novaBeats.git
cd novaBeats
```

Instalar dependencias:

```bash
npm install
```

Ejecutar la aplicación:

```bash
npm start
```

---

## Generar build

```bash
npm run build
```

Los paquetes generados se almacenan en:

```text
dist/
```

---

## Estructura del proyecto

```text
src/
├── main.js
├── index.html
├── modules/
├── renderer/
├── css/
└── assets/
```

Esta estructura mantiene separados los componentes principales de la aplicación: la ventana principal, los módulos de la aplicación, la lógica del renderer, los estilos y los activos.

---

## Próximos objetivos

- Personalización de la interfaz.
- Mejoras de rendimiento.
- Mejoras en la experiencia de usuario.
- Nuevas herramientas para organización de bibliotecas musicales.
- Soporte para más formatos y manejo de listas.
- Publicación y distribución mediante Flatpak.

---

## Feedback

Si encuentras errores o tienes sugerencias, puedes abrir un Issue en GitHub.

Todo feedback es bienvenido y contribuye a mejorar el proyecto.

---

## Autor

**Alejandro Elias**

Desarrollador Web Full Stack

---

Proyecto desarrollado como práctica de programación y aprendizaje de tecnologías web modernas aplicadas al desarrollo de aplicaciones de escritorio.
