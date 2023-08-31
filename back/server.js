const express = require('express');
const sqlite3 = require('sqlite3');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

// const sqlite3 = require('sqlite3').verbose();
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

app.post('/api/addUser', (req, res) => {
  const { nome, email, telefone, pergunta_01, pergunta_02 } = req.body;

  const sql = 'INSERT INTO form_desafio (nome, email, telefone, pergunta_01, pergunta_02) VALUES (?, ?, ?, ?, ?)';

  db.run(sql, [nome, email, telefone, pergunta_01, pergunta_02], function(err) {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao adicionar usuário.' });
    } else {
      res.json({ message: 'Usuário adicionado com sucesso.', id: this.lastID });
    }
  });
});

app.put('/api/updateUser/:id', (req, res) => {
  const userId = req.params.id;
  const { nome, email, telefone, pergunta_01, pergunta_02 } = req.body;

  const sql = 'UPDATE form_desafio SET nome = ?, email = ?, telefone = ?, pergunta_01 = ?, pergunta_02 = ? WHERE id = ?';

  db.run(sql, [nome, email, telefone, pergunta_01, pergunta_02, userId], function(err) {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao atualizar usuário.' });
    } else {
      res.json({ message: 'Usuário atualizado com sucesso.', changes: this.changes });
    }
  });
});

app.delete('/api/deleteUser/:id', (req, res) => {
  const userId = req.params.id;

  const sql = 'DELETE FROM form_desafio WHERE id = ?';

  db.run(sql, [userId], function(err) {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao deletar usuário.' });
    } else {
      res.json({ message: 'Usuário deletado com sucesso.', changes: this.changes });
    }
  });
});


app.listen(port, () => {
  console.log(`Servidor API rodando na porta ${port}`);
});

// node server.js para rodar o servidor
// http://localhost:3001/api/data