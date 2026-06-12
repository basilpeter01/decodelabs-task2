const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:        { type: String, required: true, unique: true },
    password:        { type: String, required: true },
    name:            { type: String },
    enrolledCourses: { type: [Number], default: [] }
});

module.exports = mongoose.model('User', userSchema);
