const express = require('express');
const sqlite3 = require('sqlite3');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

const db = new sqlite3.Database("./db/database.sqlite");

app.get('/api/data', (req, res) => {
  const query = 'SELECT * FROM form_desafio'; 

  db.all(query, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao buscar dados.' });
    } else {
      if (data.length === 0) {
        res.status(404).json({ message: 'Nenhum dado encontrado.' });
      } else {
        res.json(data);
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor API rodando na porta ${port}`);
});

// node server.js para rodar o servidor
// http://localhost:3001/api/data