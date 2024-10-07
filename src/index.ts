import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

const PORT = 3000;

app.get("/test/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { test } = req.cookies;

  if (test) {
    res.status(200).json({ message: "La cookie ya esta ocupada" });
    return;
  }

  res.cookie("test", id, {
    httpOnly: true,
  });

  res.status(200).json({ message: "Cookie establecida correctamente" });
});

app.listen(PORT, () => {
  console.log("Server ready");
});
