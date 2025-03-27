import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(cors());
app.use(express.json()); // JSON támogatás a POST kérésekhez

// Főoldal tesztelésre
app.get("/", (req, res) => {
  res.send("Szerver fut!");
});

// Chat endpoint
app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Üzenetet kell küldeni!" });
    }

    res.json({ reply: `Ezt mondtad: ${message}` });
  } catch (error) {
    res.status(500).json({ error: "Hiba történt a szerveren." });
  }
});

// Szerver indítása
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


