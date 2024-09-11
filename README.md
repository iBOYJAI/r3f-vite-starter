# R3F Vite Starter

A professional starter template for building 3D applications with React Three Fiber (R3F) using Vite. This setup provides a robust foundation for developing interactive 3D scenes with a modern development environment.

## Features

- React Three Fiber (R3F): Easily integrate Three.js with React for powerful 3D rendering.
- Vite: Enjoy fast build times and hot module replacement with this next-generation build tool.
- Tailwind CSS: (Optional) Utilize a utility-first CSS framework for styling.

## Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

Clone the project repository to your local machine:

- git clone git@github.com:iBOYJAI/r3f-vite-starter.git

### 2. Navigate to the Project Directory

Change into the project directory:

- cd r3f-vite-starter

### 3. Install Dependencies

Install the necessary dependencies using Yarn or npm:

- yarn

### 4. Run the Development Server

Start the Vite development server:

- yarn dev

### 5. View the Project

- Open your browser and visit http://localhost:5173 to see the running application.

## Project Structure

The project is organized as follows:

├── public/
│ └── index.html # Entry HTML file
├── src/
│ ├── components/
│ │ └── CanvasScene.jsx # 3D Box component with scene setup
│ ├── models/
│ │ └── Box.jsx # 3D Box component with animation
│ ├── styles/
│ │ └── tailwind.css # Tailwind CSS for styling (optional)
│ └── App.jsx # Main React component
├── .gitignore # Specifies files and directories to ignore in Git
├── index.html # HTML entry point for Vite
├── package.json # Project metadata and dependencies
├── tailwind.config.js # Tailwind CSS configuration (optional)
└── README.md # This file

## Code Overview

### Box.js

This file contains a simple 3D box component with animation:

- useRe: Creates a reference to the 3D mesh.
- useFram: Animates the rotation of the box.

- Materials: Applies different colors to each side of the box.

### CanvasScene.js

Sets up the 3D scene and renders theBo component within aCanva.

### Tailwind CSS (Optional)

- Configuration:tailwind.config.j
- Styles: Import insrc/styles/tailwind.cs for utility-first CSS styling.

## Technologies

- [React.js](https://reactjs.org/): A popular JavaScript library for building user interfaces.
- [React Three Fiber](https://docs.pmndrs.dev/react-three-fiber/): A React renderer for Three.js, enabling declarative 3D graphics.
- [Three.js](https://threejs.org/): A JavaScript library for creating 3D graphics in the browser.
- [Vite](https://vitejs.dev/): A modern build tool that provides a fast development environment.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development (optional).

## Developer

- iBOY JAI: Developer of this project.
