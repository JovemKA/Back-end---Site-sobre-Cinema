const express = require('express');
const {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
} = require('../controllers/userController');
const {
    createDirector,
    getDirectors,
    getDirectorById,
    updateDirector,
    deleteDirector
} = require('../controllers/directorController');

const router = express.Router();

// Rotas de Usuário
router.post('/users', createUser);
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

// Rotas de Diretor
router.post('/directors', createDirector);
router.get('/directors', getDirectors);
router.get('/directors/:id', getDirectorById);
router.put('/directors/:id', updateDirector);
router.delete('/directors/:id', deleteDirector);



module.exports = router;