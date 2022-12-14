const { Schema, model, Types } = require('mongoose');

const User = new Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    links: [{type: Types.ObjectId, ref: 'Link'}]
});

module.exports = model('user', User);