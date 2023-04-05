import express from 'express';
require('dotenv').config();
import {connect} from './database';

const server = express();
server.use(express.json());

connect();


const port = process.env.port;
server.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`)
});