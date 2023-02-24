const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    birthDate: Date
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
