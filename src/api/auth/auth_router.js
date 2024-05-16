import express from 'express'
import { get_user } from './get_user';
import { get_films } from './get_films';
import { get_film } from './get_film';
import { post_film } from './post_film';
import { put_film } from './put_film';
import { delete_film } from './delete_film';
import { get_reviews } from './get_reviews';
import { post_review } from './post_review';
import { put_review } from './put_review';
import { delete_review } from './delete_review';



export const auth_router = express.Router();
//user
auth_router.get('/user', get_user)
//films
auth_router.get('/films', get_films)
auth_router.get('/films/:id', get_film)
auth_router.post('/films', post_film)
auth_router.put('/films/:id', put_film)
auth_router.delete('/films/:id', delete_film)
//reviews
auth_router.get('/films/:id/reviews', get_reviews)
auth_router.post('/films/:id/reviews', post_review)
auth_router.put('/films/:id/reviews/:id', put_review)
auth_router.delete('/films/:id/reviews/:id', delete_review)