import mongoose from 'mongoose';


const schema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

export const UserModel = mongoose.model('user', schema);