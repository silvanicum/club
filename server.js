import express from "express";
import { OpenAI } from "openai";

const app = express();
const PORT = process.env.PORT || 3000;

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Az API kulcsot a Render kezeli
});

app.use(express.json());

app.post("/chat", async (req, res) => {
    try {
        const { message } = req.body;
        if (!message) {
            return res.status(400).json({ error: "Üzenet szükséges!" });
        }

        const response = await openai.chat.completions.create({
            model: "gpt-4-turbo",
            messages: [{ role: "user", content: message }],
        });

        res.json({ reply: response.choices[0].message.content });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Hiba történt a chat API hívása közben" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


const app = express();
const PORT = process.env.PORT || 10000;

// Főoldal ("/") kiszolgálása
app.get("/", (req, res) => {
    res.send("🚀 Az OpenAI szerver fut!");
});

// Indítsd el a szervert
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


