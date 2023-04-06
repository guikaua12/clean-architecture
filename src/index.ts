require('dotenv').config();
import {connect} from './shared/database';
import {server} from './shared/server/server';

connect();

const port = process.env.port;
server.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`)
});
