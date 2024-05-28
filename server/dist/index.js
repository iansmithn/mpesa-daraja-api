"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const TokenRoute = require("./routes/token");
const port = 3030;
app.listen(port, () => {
    console.log("server is running on port", port);
});
app.get("/", (req, res) => {
    res.send("Mpesa program running");
});
app.use("/token", TokenRoute);
//# sourceMappingURL=index.js.map