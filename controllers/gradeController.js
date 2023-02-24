exports.getData = (req, res) => {

    // get data from database
    const gradeData = {
        subject: 'IFT 598',
        grade: 'A',
        date: '01/20/1989'
    }
    res.send(`Hello World from student GET ${JSON.stringify(gradeData)}`);
} 


exports.postData = (req, res) => res.send('Hello World from grade POST');

exports.getDataById = (req, res) => res.send('Hello World from grade GET');
exports.patchDataById = (req, res) => res.send('Hello World from grade PATCH');
exports.updateDataById = (req, res) => res.send('Hello World from grade PUT');
exports.deleteDataById = (req, res) => res.send('Hello World from grade DELETE');
