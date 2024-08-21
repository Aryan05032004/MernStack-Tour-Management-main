import express from 'express';
import { createTour, deleteTour, getAllTour, getSingleTour, updateTour } from '../controllers/tourController.js';

const router = express.Router();

// Route to create a new tour
router.post('/', createTour);

// Route to update an existing tour
router.put('/:id', updateTour);

// Route to delete a tour
router.delete('/:id', deleteTour);  // Corrected the route to include :id

// Route to get a single tour
router.get('/:id', getSingleTour);

// Route to get all tours
router.get('/', getAllTour);

export default router;
