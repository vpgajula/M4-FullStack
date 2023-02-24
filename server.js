const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

//routes
// app.get('/', (req, res) => res.send('Hello World, this is my first node app'));
// app.get('/student', (req, res) => res.send('Hello World from student'));
// app.get('/student/grade', (req, res) => res.send('Hello World from student grade'));

const studentRoute = require('./routes/studentRoute');
app.use('/student', studentRoute);

const gradeRoute = require('./routes/gradeRoute');
app.use('/grade', gradeRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}`));

//connecting to the database
const mongoose = require('mongoose');
//synchronous DB connection
// mongoose.connect('mongodb://localhost:27017/StudentDB', {useNewUrlParser: true}, (err) => {
//     if (!err) {console.log('MongoDB connection succeeded.')}
//     else {console.log('Error in DB connection: ' + err )}
// });

//asynchronous DB connection
mongoose.connect('mongodb+srv://vpgajula:iftpassword@myfirstmongocluster-gvp.o8zigu8.mongodb.net/IFT-598-2023', {useNewUrlParser: true})
    .then(() => console.log('MongoDB connection succeeded.'))
    .catch((err) => console.log('Error in DB connection: ' + err));

