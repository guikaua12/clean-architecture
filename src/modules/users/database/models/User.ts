import mongoose from 'mongoose';


const schema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
}, {
    toJSON: {
        virtuals: true,
        transform: function (doc, ret) {
            ret.id = ret._id;
            delete ret.__v;
            delete ret._id;
            return ret;
        }
    },
    toObject: {
        virtuals: true,
        transform: function (doc, ret) {
            ret.id = ret._id;
            delete ret.__v;
            delete ret._id;
            return ret;
        }
    }
});

export const UserModel = mongoose.model('user', schema);