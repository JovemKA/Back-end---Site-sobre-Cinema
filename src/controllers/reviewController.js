import { Review } from '../models';

export const getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.findAll();
    res.status(200).json(reviews);
  } catch (error) {
    next(error);
  }
};

export const createReview = async (req, res, next) => {
  try {
    const review = await Review.create(req.body);
    res.status(201).json(review);
  } catch (error) {
    next(error);
  }
};

export const updateReview = async (req, res, next) => {
  try {
    const review = await Review.update(req.body, {
      where: { id: req.params.id }
    });
    res.status(200).json(review);
  } catch (error) {
    next(error);
  }
};

export const deleteReview = async (req, res, next) => {
  try {
    await Review.destroy({
      where: { id: req.params.id }
    });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
