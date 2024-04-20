const express = require('express');
const router = express.Router();
const { reviewController } = require('../controllers/reviewController');

router.post('/', reviewController.createReview);
router.get('/:id', reviewController.getReviewById);
router.get('/', reviewController.getAllReviews);
router.delete('/:id', reviewController.deleteReviewById);

module.exports = router;
