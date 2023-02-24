const Student = require('../models/studentModel');

exports.getData = async (req, res) => {
    // get data from database
    const students = await Student.find()
    res.status(200).json({
        status: 'Success',
        results: students.length,
        data: {
            students
        }
    })
    // const data = {
    //     name: 'John',
    //     age: 30,
    //     birthDate: '01/20/1989'
    // }
    // res.send(`Hello World from student GET ${JSON.stringify(data)}`);
};

exports.getDataById = async (req, res) => {
    // get data from database
    const {id} = req.params;
    const students = await Student.find({_id: id});
    res.status(200).json({
        status: 'Success',
        results: students.length,
        data: {
            students
        }
    });
};

exports.postData = async (req, res) => {
    const newStudent = req.body;
    const student = await Student.create(newStudent)
    res.status(201).json({
        status: 'Success',
        data: student
    });
    //res.send('Hello World from student POST');
};

exports.patchDataById = (req, res) => res.send('Hello World from student PATCH');
exports.updateDataById = (req, res) => res.send('Hello World from student PUT');
exports.deleteDataById = (req, res) => res.send('Hello World from student DELETE');
