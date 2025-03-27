import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 10000;

// Köztes rétegek (Middleware)
app.use(cors());
app.use(express.json());

// Alap útvonal ("/") kiszolgálása
app.get("/", (req, res) => {
    res.send("🚀 Az OpenAI szerver fut!");
});

// Szerver indítása
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});


