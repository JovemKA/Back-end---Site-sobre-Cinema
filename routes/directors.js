const express = require('express');
const router = express.Router();
const directorController = require('../controllers/directorController');

router.post('/', directorController.createDirector);
router.get('/', directorController.getDirectors);
router.get('/:id', directorController.getDirectorById);
router.put('/:id', directorController.updateDirector);
router.delete('/:id', directorController.deleteDirector);

module.exports = router;
