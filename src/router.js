import express from 'express';
import { getUsers, getUserById, createUser , updateUser, deleteUser } from './controllers/userController';
import { getDirectors, createDirector, updateDirector, deleteDirector } from './controllers/directorController';
import { getFilms, createFilm, updateFilm, deleteFilm } from './controllers/filmController';
import { getReviews, createReview, updateReview, deleteReview } from './controllers/reviewController';

const router = express.Router();

// User routes
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

// Director routes
router.get('/directors', getDirectors);
router.post('/directors', createDirector);
router.put('/directors/:id', updateDirector);
router.delete('/directors/:id', deleteDirector);

// Film routes
router.get('/films', getFilms);
router.post('/films', createFilm);
router.put('/films/:id', updateFilm);
router.delete('/films/:id', deleteFilm);

// Review routes
router.get('/reviews', getReviews);
router.post('/reviews', createReview);
router.put('/reviews/:id', updateReview);
router.delete('/reviews/:id', deleteReview);

export default router;
