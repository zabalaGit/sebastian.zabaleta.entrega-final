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


## Documentación de los endpoints

### 1. Obtener todos los productos:
Muestra la lista de productos y sus características (id, disponible, precio, nombre)
- **Método:** GET
- **Ruta:** `/api/products`

Respuesta:
``` plaintext
{
    "id": "1fRIhROjQ6Yd7MPaR5EJ",
    "disponible": false,
    "precio": 7800,
    "nombre": "yerba cachamai"
}
```

### 2. Obtener un producto especifico, se lo pasamos en la ruta:
Muestra las características de un producto (disponible, precio, nombre), enviando el id del producto
- **Método:** GET
- **Ruta:** `/api/products/FCLvXZwCwqC5sfo5zXyD`

Respuesta:
``` plaintext
{
        "disponible": false,
        "precio": 9800,
        "nombre": "yerba canarias"
}
```

### 3. Crear un producto especifico:
Crea un producto, enviando los siguientes datos (disponible**, precio, nombre) 
** el dato "disponible" es opcional. Si no lo enviamos, el producto se crea como disponible = FALSE
- **Método:** POST
- **Ruta:** `/api/products`

En el body, en formato RAW / JSON:
``` plaintext
{
    "nombre":"soy un producto nuevo",
    "precio": 500
}
```
Respuesta:
``` plaintext
{
        "nombre": "soy un producto nuevo",
        "precio": 500,
        "disponible": false
}
```


### 4. Eliminar un producto especifico:
Elimina un producto, enviando el id del producto
- **Método:** DELETE
- **Ruta:** `/api/products/FCLvXZwCwqC5sfo5zXyD`

Respuesta:
``` plaintext
{
        "message": "producto eliminado!"
}
```


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
