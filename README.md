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
Describe cada *endpoint* con su método HTTP, ruta, parámetros, cuerpo de la solicitud y ejemplo de respuesta. Usa bloques de código para mostrar ejemplos claros.

Ejemplo:
```markdown
## Endpoints

### Obtener todos los productos
- **Método:** GET
- **Ruta:** `/api/productos`

**Ejemplo de solicitud:**
```http
GET /api/productos HTTP/1.1
Host: localhost:5000

**Respuesta:**
[
  { "id": 1, "nombre": "Juan Pérez" },
  { "id": 2, "nombre": "María López" }
]



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
