import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config(); // Betölti a .env fájlt

const app = express();
const PORT = process.env.PORT || 3000;

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // OpenAI API kulcs beolvasása
});

app.get("/", (req, res) => {
    res.send("Hello from Render!");
});

app.get("/chat", async (req, res) => {
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [{ role: "user", content: "Írj egy motiváló üzenetet!" }],
        });

        res.json({ response: completion.choices[0].message.content });
    } catch (error) {
        console.error("Hiba történt:", error);
        res.status(500).json({ error: "Valami hiba történt!" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
