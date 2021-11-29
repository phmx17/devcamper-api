const express = require('express');
const dotenv = require('dotenv'); // toold to prcess env variables; see config folder
const morgan = require('morgan'); // logging middleware
const colors = require('colors'); // for coloring console outputs
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

// load env vars
dotenv.config({ path: './config/config.env' });

connectDB();  // connect to Atlas

// import route files
const bootcampRoutes = require('./routes/bootcamps');

const app = express();

// body parser
app.use(express.json());

// only run this logger if in dev environment
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//  mount routes
app.use('/api/v1/bootcamps', bootcampRoutes)

// apply our custom error handler in order to receive json data on errors
app.use(errorHandler);


// starting server
const PORT = process.env.PORT || 5000;
const server = app.listen(
  PORT, 
  console.log(`Server running in: ${process.env.NODE_ENV} mode on port: ${PORT}`.yellow.bold));

// handle unhandled promise rejections by exiting server if connection to mongo DB fails
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: (most likely failure to connect to Atlas) ${err.message}`);
  // close server and exit process
  server.close(() => process.exit(1));
})