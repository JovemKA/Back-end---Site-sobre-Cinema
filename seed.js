const { Sequelize, DataTypes } = require('sequelize');
const { config } = require('dotenv');

config();
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set');
}

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

const Director = require('./models/director')(sequelize, DataTypes);
const Film = require('./models/film')(sequelize, DataTypes);
const Review = require('./models/review')(sequelize, DataTypes);
const User = require('./models/user')(sequelize, DataTypes);

const seedDatabase = async () => {
  await sequelize.sync({ force: true }); // Certifique-se de que isso seja usado apenas em ambiente de desenvolvimento

  // Criar usuários
  const user1 = await User.create({
    username: 'john_doe',
    email: 'john@example.com',
    password_hash: 'hashedpassword1',
    registration_date: new Date()
  });

  const user2 = await User.create({
    username: 'jane_smith',
    email: 'jane@example.com',
    password_hash: 'hashedpassword2',
    registration_date: new Date()
  });

  // Criar diretores
  const director1 = await Director.create({
    name: 'Christopher Nolan',
    birthdate: '1970-07-30',
    biography: 'Christopher Nolan is a British-American film director, producer, and screenwriter.'
  });

  const director2 = await Director.create({
    name: 'Steven Spielberg',
    birthdate: '1946-12-18',
    biography: 'Steven Spielberg is an American film director, producer, and screenwriter.'
  });

  // Criar filmes
  const film1 = await Film.create({
    title: 'Inception',
    release_year: 2010,
    genre: 'Sci-Fi',
    duration: 148,
    synopsis: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
    directorId: director1.id
  });

  const film2 = await Film.create({
    title: 'Interstellar',
    release_year: 2014,
    genre: 'Sci-Fi',
    duration: 169,
    synopsis: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    directorId: director1.id
  });

  const film3 = await Film.create({
    title: 'Jurassic Park',
    release_year: 1993,
    genre: 'Adventure',
    duration: 127,
    synopsis: 'A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park\'s cloned dinosaurs to run loose.',
    directorId: director2.id
  });

  const film4 = await Film.create({
    title: 'E.T. the Extra-Terrestrial',
    release_year: 1982,
    genre: 'Sci-Fi',
    duration: 115,
    synopsis: 'A troubled child summons the courage to help a friendly alien escape Earth and return to his home world.',
    directorId: director2.id
  });

  // Criar críticas
  await Review.create({
    filmId: film1.id,
    userId: user1.id,
    rating: 9,
    review_text: 'An amazing film with a mind-bending plot!',
    review_date: new Date()
  });

  await Review.create({
    filmId: film2.id,
    userId: user2.id,
    rating: 10,
    review_text: 'A breathtaking journey through space and time.',
    review_date: new Date()
  });

  await Review.create({
    filmId: film3.id,
    userId: user1.id,
    rating: 8,
    review_text: 'A thrilling adventure with groundbreaking special effects.',
    review_date: new Date()
  });

  await Review.create({
    filmId: film4.id,
    userId: user2.id,
    rating: 9,
    review_text: 'A heartwarming story that captures the magic of childhood.',
    review_date: new Date()
  });

  await sequelize.close();
};

seedDatabase();
