const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let todos = [
  { id: 1, text: 'Sample task', done: false }
];

app.get('/api/todos', (req, res) => res.json(todos));
app.post('/api/todos', (req, res) => {
  const { text } = req.body;
  const id = todos.length ? todos[todos.length - 1].id + 1 : 1;
  const item = { id, text, done: false };
  todos.push(item);
  res.status(201).json(item);
});

app.listen(4000, () => console.log('Backend listening on port 4000'));
