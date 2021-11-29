// example of custom middleware:
exports.logger = (req, res, next) => {
  req.hellow = "hello from logger";
  console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
  next(); // must use to pass on to next middlewarez
};

