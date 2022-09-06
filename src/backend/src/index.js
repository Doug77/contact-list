const express = require('express');
require('dotenv').config();
const cors = require('cors');

const routes = require('./routes/routes');

const app = express();
const { PORT } = process.env;

app.use(cors());

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

app.use(express.json());

app.get('/', (_req, res) => res.send('oi'));

app.use('/user', routes.userRouter);
app.use('/contacts', routes.contactRouter);
