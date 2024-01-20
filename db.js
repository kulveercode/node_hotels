const mongoose = require ('mongoose');

//define mongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels'

//setup mongodb connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//get default connection 
const db = mongoose.connection;

//define event listeners for database connection

db.on('connected', () => {
    console.log('Connected to mongoDB server');
});

db.on('error', (err) => {
    console.log('mongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('mongoDB disconnected');
});

//export the database connection
module.exports = db;

