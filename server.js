import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello from Render!");
});

// Új útvonal a /chat-hez
app.get("/chat", (req, res) => {
    res.send("Ez a chat oldal!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
