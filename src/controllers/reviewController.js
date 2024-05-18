// controllers/reviewController.js
const { Review, Film, Director, User } = require('../models');

const get_film_reviews = async (req, res) => {
  try {
    const { filmId } = req.params;
    const reviews = await Review.findAll({
      where: { filmId },
      include: [
        { model: User, attributes: ['id', 'username'] },
        { model: Film, attributes: ['id', 'title', 'genre', 'releaseYear'], include: { model: Director, attributes: ['id', 'name'] } }
      ]
    });

    res.status(200).json(reviews);
  } catch (error) {
    console.error('Erro ao recuperar avaliações:', error);
    res.status(500).json({ error: 'Erro ao recuperar avaliações' });
  }
};

module.exports = { get_film_reviews };
