import express from "express";
import cors from "cors";
import TokenRoute from "./routes/token";

const app = express();

const port = 3030;

app.listen(port, () => {
  console.log("server is running on port", port);
});

app.get("/", (req, res) => {
  res.send("Mpesa program running");
});

app.use("/token", TokenRoute);
