import mongoose from 'mongoose';

export function connect() {
    mongoose.connect(process.env.DB_CONNECT_URL as string);

    const db = mongoose.connection;

    db.once('open', () => {
        console.log('Conexão com o DB foi feita com sucesso');
    }).on('error', (err) => {
        console.log(err);
    });

    return db;
}