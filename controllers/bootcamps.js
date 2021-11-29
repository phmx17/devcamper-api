const ErrorResponse = require('../utils/errorResponse');
const Bootcamp = require('../models/Bootcamp');

// @desc    get all bootcamps
// @route   GET/api/v1/bootcamps
// @access  public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res.status(200).json({ success: true, count: bootcamps.length, data: bootcamps });
  } catch (err) {
    next(err);
  }
};

// @desc    get single bootcamp
// @route   GET/api/v1/bootcamp/:id
// @access  public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id)
    if (!bootcamp) {  // id format ok, but not found
      return next(new ErrorResponse(`Bootcamp with id: ${req.params.id} not found.`, 404)) ;
    }
    res.status(200).json({ success: true, data: bootcamp });
    // the id is of totally wrong format; this replaces 505 "internal server error";
  } catch (err) {    
    next(err);
    // next(new ErrorResponse(`Invalid format for Bootcamp id: ${req.params.id}`, 404)); // instantiating from our class
  }
};

// @desc    create a single bootcamp
// @route   POST/api/v1/bootcamps
// @access  private
exports.createBootcamp = async (req, res, next) => {
  try {
  const bootcamp = await Bootcamp.create(req.body);
  res.status(201).json({ 
    success: true,     
    data: bootcamp
  });
  } catch (err) {
  next(err);
  }
};

// @desc    update single bootcamps
// @route   PUT/api/v1/bootcamps/:id
// @access  private
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runvalidators: true
    });
    res.status(200).json({ success: true, data: bootcamp})
    if (!bootcamp) {
      return next(new ErrorResponse(`Bootcamp with id: ${req.params.id} not found.`, 404)) ;
    }
  } catch(err) {
    next(err);
  }
};

// @desc    delete single bootcamps
// @route   DELETE/api/v1/bootcamps/:id
// @access  private
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)
    if (!bootcamp) {
      return next(new ErrorResponse(`Bootcamp with id: ${req.params.id} not found.`, 404)) ;
    };
    res.status(200).json({ success: true, msg: `bootcamp ${bootcamp.name} deleted.` });
  } catch(err) {
    next(err);
  }
}; 
