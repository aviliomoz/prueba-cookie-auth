import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

const PORT = 3000;

app.get("/test", (req: Request, res: Response) => {
  res.cookie("test", new Date().toString(), {
    httpOnly: true,
  });

  res.status(200).json({ message: "Cookie establecida correctamente" });
});

app.listen(PORT, () => {
  console.log("Server ready");
});
