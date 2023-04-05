import express from 'express';
require('dotenv').config();
import {connect} from './database';
import {router} from './routes';

const server = express();
server.use(express.json());
server.use(router);

connect();


const port = process.env.port;
server.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`)
});