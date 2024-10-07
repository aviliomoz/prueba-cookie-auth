import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cors());
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
