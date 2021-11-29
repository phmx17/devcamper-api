const express = require('express'); 
const router = express.Router();
// require controllers
const { 
  getBootcamps, 
  getBootcamp, 
  createBootcamp, 
  updateBootcamp, 
  deleteBootcamp 
} = require('../controllers/bootcamps');

// hook up controllers
router.route('/').get(getBootcamps).post(createBootcamp);
router.route('/:id').get(getBootcamp).put(updateBootcamp).delete(deleteBootcamp);

module.exports = router;