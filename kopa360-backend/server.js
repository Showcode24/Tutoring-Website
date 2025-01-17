const express = require('express');
const cors = require('cors'); // Importing cors

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors()); // Enabling CORS middleware

app.get('/', (req, res) => {
  res.send('Kopa 360 backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
