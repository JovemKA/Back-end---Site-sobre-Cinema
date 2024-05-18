import { Film } from '../models';

export const getFilms = async (req, res, next) => {
  try {
    const films = await Film.findAll();
    res.status(200).json(films);
  } catch (error) {
    next(error);
  }
};

export const createFilm = async (req, res, next) => {
  try {
    const film = await Film.create(req.body);
    res.status(201).json(film);
  } catch (error) {
    next(error);
  }
};

export const updateFilm = async (req, res, next) => {
  try {
    const film = await Film.update(req.body, {
      where: { id: req.params.id }
    });
    res.status(200).json(film);
  } catch (error) {
    next(error);
  }
};

export const deleteFilm = async (req, res, next) => {
  try {
    await Film.destroy({
      where: { id: req.params.id }
    });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
