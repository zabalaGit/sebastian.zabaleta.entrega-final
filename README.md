# Entrega final
Una API para gestionar productos.

## Índice
- [Instalación](#instalación)
- [Endpoints](#endpoints)
- [Ejemplos de uso](#ejemplos-de-uso)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Licencia](#licencia)

## Instalación
1. Clona el repositorio
2. Instala las dependencias
3. Inicia el servidor (npm start)


### 4. **Documentación de los *endpoints***


## Obtener todos los productos
Muestra la lista de productos y sus características (id, disponible, precio, nombre)
- **Método:** GET
- **Ruta:** `/api/products`

**Respuesta:**
        {
            "id": "1fRIhROjQ6Yd7MPaR5EJ",
            "disponible": false,
            "precio": 7800,
            "nombre": "yerba cachamai"
        }



## Estructura del proyecto
``` plaintext
carpeta-destino/
├── config/                 # Configuraciones generales (DB, variables de entorno, etc.)
│   └── db.js               # Configuración de la base de datos
│
├── controllers/           # Controladores: lógica que responde a las rutas
│   └── user.controller.js
│
├── services/              # Servicios: lógica de negocio reutilizable
│   └── user.service.js
│
├── routes/                # Definición de rutas y middlewares asociados
│   └── user.routes.js
│
├── models/                # Modelos de datos (si usás MongoDB, Sequelize, etc.)
│   └── user.model.js
│
├── middlewares/           # Middlewares personalizados
│   └── auth.middleware.js
│
├── index.js               # Punto de entrada del servidor
├── package.json           # Dependencias y scripts
├── README.md              # Documentación del proyecto

```
---

## Licencia

Este proyecto está licenciado bajo la licencia **MIT**. Consulta el archivo [LICENSE](./LICENSE) para más detalles.
