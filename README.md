# Task Manager Application

Una aplicación web para gestionar tareas diarias. Incluye un frontend desarrollado con Vue 3 (Vite) y un backend con Node.js y Express, además de MongoDB para almacenar las tareas.

## **Características**

- Ver una lista de tareas.
- Agregar nuevas tareas.
- Marcar tareas como completadas o no completadas.
- Eliminar tareas.
- Filtrar tareas (todas, completadas, no completadas).

---

## **Estructura del Proyecto**

TASK-MANAGER /
├── frontend/ # Aplicación frontend (Vue 3 con Vite)
│ ├── src/
│ │ ├── components/ # Componentes Vue
│ │ ├── store/ # Estado global con Pinia
│ │ └── main.js # Punto de entrada
│ ├── public/ # Recursos estáticos
│ └── package.json # Dependencias del frontend
├── backend/ # Aplicación backend (Node.js y Express)
│ ├── index.js # Punto de entrada del servidor
│ └── package.json # Dependencias del backend
├── README.md # Documentación del proyecto
└── .gitignore # Archivos ignorados por Git

---

## **Requisitos Previos**

- [Node.js](https://nodejs.org) (v16 o superior)
- [MongoDB](https://www.mongodb.com) (puede configurarse localmente o usando Docker)

---

## **Instalación y Configuración**

### **1. Clonar el Repositorio**

```bash
git clone https://github.com/juanmatoro/Task-Manager.git
cd task-manager
```
