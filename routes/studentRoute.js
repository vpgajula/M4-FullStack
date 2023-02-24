const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// router.get('/', (req, res) => res.send('Hello World from student GET'));
// router.post('/', (req, res) => res.send('Hello World from student POST'));
// router.put('/', (req, res) => res.send('Hello World from student PUT'));
// router.delete('/', (req, res) => res.send('Hello World from student DELETE'));

// var getData = (req, res) => res.send('Hello World from student GET');
// var postData = (req, res) => res.send('Hello World from student POST');
// var updateData = (req, res) => res.send('Hello World from student PUT');
// var deleteData = (req, res) => res.send('Hello World from student DELETE');

// router.get('/', studentController.getData);
// router.post('/', studentController.postData);
// router.put('/', studentController.updateData);
// router.delete('/', studentController.deleteData);

router.route('/')
    .get(studentController.getData)
    .post(studentController.postData)
    
router.route('/:id')
    .get(studentController.getDataById)
    .patch(studentController.patchDataById)
    .put(studentController.updateDataById)
    .delete(studentController.deleteDataById);

module.exports = router;