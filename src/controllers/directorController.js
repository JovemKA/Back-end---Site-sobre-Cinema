import { Director } from '../models';

export const getDirectors = async (req, res, next) => {
  try {
    const directors = await Director.findAll();
    res.status(200).json(directors);
  } catch (error) {
    next(error);
  }
};

export const createDirector = async (req, res, next) => {
  try {
    const director = await Director.create(req.body);
    res.status(201).json(director);
  } catch (error) {
    next(error);
  }
};

export const updateDirector = async (req, res, next) => {
  try {
    const director = await Director.update(req.body, {
      where: { id: req.params.id }
    });
    res.status(200).json(director);
  } catch (error) {
    next(error);
  }
};

export const deleteDirector = async (req, res, next) => {
  try {
    await Director.destroy({
      where: { id: req.params.id }
    });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
