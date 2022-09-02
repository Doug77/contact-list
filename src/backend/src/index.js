const express = require('express');
require('dotenv').config();

const app = express();
const { PORT } = process.env;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

app.use(express.json());

app.get('/', (req, res) => res.send('oi'));
