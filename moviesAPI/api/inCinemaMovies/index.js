import express from 'express';
import InCinemaModel from './InCinemaModel';


const router = express.Router();
router.get('/', (req, res, next) => {
  InCinemaModel.find().then(InCinemaMovies => res.status(200).send(InCinemaMovies)).catch(next);
});


router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  InCinemaModel.findByMovieDBId(id).then(InCinemaMovies => res.status(200).send(InCinemaMovies)).catch(next);
});


export default router;