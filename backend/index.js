const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Project1 backend is running' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/support', (req, res) => {
  res.json({ email: 'vvedanth72@gmail.com' });
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body || {};
  // In a real backend you'd save/send the message. Here we just echo.
  res.json({ ok: true, received: { name, email, message } });
});

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
