const express = require('express');
const router = express.Router();
const gradeController = require('../controllers/gradeController');

// router.get('/', gradeController.getData);
// router.post('/', gradeController.postData);
// router.put('/', gradeController.updateData);
// router.delete('/', gradeController.deleteData);

router.route('/')
    .get(gradeController.getData)
    .post(gradeController.postData)

router.route('/:id')
    .get(gradeController.getDataById)
    .patch(gradeController.patchDataById)
    .put(gradeController.updateDataById)
    .delete(gradeController.deleteDataById);

module.exports = router;
