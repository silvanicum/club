import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

// Statikus fájlok kiszolgálása (ha van frontend)
app.use(express.static('public'));

// Alap útvonal kezelése
app.get('/', (req, res) => {
  res.send('A szerver működik!');
});

// Szerver indítása
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


