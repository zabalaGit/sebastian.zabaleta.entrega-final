import express from "express";
import cors from "cors";

import { join, __dirname } from "./utils/index.js";
import productRoutes from "./routes/product.route.js";

//settings
const app = express();
app.set("PORT", process.env.PORT || 5000);

app.use(cors());

// middlewares
app.use(express.json());
app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

//routes
app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});
app.use("/api/products", productRoutes);
app.use((req, res, next) => { 
res.status(404).send('Recurso no encontrado o ruta inválida'); 
});

//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
