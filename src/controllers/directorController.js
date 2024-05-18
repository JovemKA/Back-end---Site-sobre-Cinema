const { Director } = require('../models');

const createDirector = async (req, res, next) => {
    try {
        const director = await Director.create(req.body);
        res.status(201).json(director);
    } catch (error) {
        next(error);
    }
};

const getDirectors = async (req, res, next) => {
    try {
        const directors = await Director.findAll();
        res.json(directors);
    } catch (error) {
        next(error);
    }
};

const getDirectorById = async (req, res, next) => {
    try {
        const director = await Director.findByPk(req.params.id);
        if (director) {
            res.json(director);
        } else {
            res.status(404).json({ error: 'Director not found' });
        }
    } catch (error) {
        next(error);
    }
};

const updateDirector = async (req, res, next) => {
    try {
        const [updated] = await Director.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedDirector = await Director.findByPk(req.params.id);
            res.json(updatedDirector);
        } else {
            res.status(404).json({ error: 'Director not found' });
        }
    } catch (error) {
        next(error);
    }
};

const deleteDirector = async (req, res, next) => {
    try {
        const deleted = await Director.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Director not found' });
        }
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createDirector,
    getDirectors,
    getDirectorById,
    updateDirector,
    deleteDirector
};
