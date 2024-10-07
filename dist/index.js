"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
const PORT = 3000;
app.post("/test/:id", (req, res) => {
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
