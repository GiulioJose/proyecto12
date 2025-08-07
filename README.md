# 🎮 Proyecto 12 – Juegos en React

Este proyecto es una **refactorización del proyecto 5 hecho con JavaScript puro**, en el cual se desarrollaron tres juegos: **Tres en Raya, Snake y Memoria**. Esta versión fue reimplementada completamente en **React**, utilizando técnicas modernas de gestión de estado y optimización de renderizado.

Se han reutilizado los **estilos SCSS** del Proyecto 5, manteniendo la estética original pero integrando los componentes en una arquitectura modular de React.

---

## 📁 Estructura del proyecto

```
src/
│
├── components/          → Componentes reutilizables
├── games/               → Juegos: Snake, Memoria, TresEnRaya
│   └── [juego]/         → Lógica + componentes por juego
├── pages/               → Vistas asociadas a cada ruta
├── styles/              → SCSS modular por páginas y componentes
│   ├── global/          → Mixins, variables, reset
│   └── pages/           → Estilos por juego
└── App.jsx              → Configuración principal y rutas
```

---

## ✅ Requisitos cumplidos

* [x] Full responsive
* [x] Buen uso de CSS y HTML semántico
* [x] Uso de `react-router-dom`
* [x] Uso de al menos un `custom hook`
* [x] Uso de `useReducer`
* [x] Sin re-renderizados innecesarios
* [x] Componentes correctos y modulares

### 1. **Full responsive**

Todos los componentes y vistas están diseñados para adaptarse a distintos tamaños de pantalla, aprovechando media queries ya presentes en el SCSS del proyecto anterior.

### 2. **Buen uso de CSS y HTML semántico**

Se reutiliza el SCSS del Proyecto 5 y se adapta para React. Se respetan clases, jerarquías y variables CSS. El HTML generado por los componentes es semántico y estructurado.

### 3. **Uso de `react-router-dom`**

Se implementa navegación mediante `react-router-dom`, con rutas individuales para cada juego (`/snake`, `/memoria`, `/tres-en-raya`) y un home.

### 4. **Uso de al menos un `custom hook`**

El juego de **Memoria** implementa un `custom hook` llamado `useMemoria` que encapsula la lógica de juego, separación de responsabilidades y evita duplicaciones.

### 5. **Uso de `useReducer`**

Tanto el juego **Snake** como **Tres en Raya** utilizan `useReducer` para manejar su lógica interna de estado, lo que permite mantener un flujo claro y controlado, evitando re-renderizados innecesarios.

### 6. **Sin re-renderizados innecesarios**

Se ha optimizado el uso de `useEffect`, `useReducer`, y props, para garantizar que solo los componentes necesarios se re-rendericen al cambiar el estado.

### 7. **Componentes correctos y modulares**

Cada juego está encapsulado dentro de su carpeta, y los componentes están organizados y divididos correctamente por responsabilidades.

---

## 🛠️ Tecnologías utilizadas

* React (Vite)
* React Router DOM
* SCSS modular
* Hooks (`useState`, `useEffect`, `useReducer`)
* Custom Hooks

---

## 🚀 Cómo ejecutar el proyecto

1. Clonar el repositorio:

```bash
git clone https://github.com/tuusuario/proyecto12.git
cd proyecto12
```

2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar en desarrollo:

```bash
npm run dev
```

---

## 👨‍🏫 Notas finales

Este proyecto fue desarrollado con fines educativos como parte de la práctica avanzada de React, enfocada en el manejo de estado con hooks, optimización del renderizado y modularización de componentes.
