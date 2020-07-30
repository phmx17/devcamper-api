// @desc    get all bootcamps
// @route   GET/api/v1/bootcamps
// @access  public
exports.getBootcamps = (req,res, next) => {
  res.status(200).json({ success: true, msg: 'show all bootcamps'});
};

// @desc    get single bootcamp
// @route   GET/api/v1/bootcamp/:id
// @access  public
exports.getBootcamp = (req,res, next) => {
  res.status(200).json({ success: true, msg: 'show single bootcamp'});
};

// @desc    create a single bootcamp
// @route   POST/api/v1/bootcamps
// @access  private
exports.createBootcamp = (req,res, next) => {
  res.status(201).json({ success: true, msg: 'create single bootcamp'});
};

// @desc    update single bootcamps
// @route   PUT/api/v1/bootcamps/:id
// @access  private
exports.updateBootcamp = (req,res, next) => {
  res.status(200).json({ success: true, msg: 'update single bootcamp'});
};

// @desc    delete single bootcamps
// @route   DELETE/api/v1/bootcamps/:id
// @access  private
exports.deleteBootcamp = (req,res, next) => {
  res.status(200).json({ success: true, msg: 'delete single bootcamp'});
};