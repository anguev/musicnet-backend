const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "demo@mail.com" && password === "1234") {
    res.json({ ok: true, name: "Ángel" });
  } else {
    res.status(401).json({ ok: false });
  }
});

app.get("/", (req, res) => {
  res.send("API MusicNet funcionando");
});

app.listen(3000);
