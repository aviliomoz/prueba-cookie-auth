import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// Permitir solicitudes CORS desde tu origen
const corsOptions = {
  origin: 'http://localhost:5173', // Cambia esto al origen correcto
  credentials: true, // Permitir cookies y credenciales
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

const PORT = 3000;

app.post("/test", (req: Request, res: Response) => {
  const body = req.body;

  res.cookie("test", JSON.stringify(body), {
    httpOnly: true,
  });

  res.status(200).json({ message: "Cookie establecida correctamente" });
});

app.listen(PORT, () => {
  console.log("Server ready");
});
