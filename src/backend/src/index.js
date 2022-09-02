const express = require('express');
require('dotenv').config();

const routes = require('./routes/routes');

const app = express();
const { PORT } = process.env;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

app.use(express.json());

app.get('/', (_req, res) => res.send('oi'));

app.use('/login', routes.userRouter);
