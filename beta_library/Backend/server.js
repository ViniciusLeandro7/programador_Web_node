const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/livros', (req, res) => {
  res.json([{ id: 1, titulo: 'O Senhor dos Anéis' }]);
});

app.listen(5000, () => console.log('Backend rodando na porta 5000'));
