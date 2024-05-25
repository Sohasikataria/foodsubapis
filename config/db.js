const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb+srv://foodsub789:TA1r0ZX1qfJDxaDZ@foodsub.dgk6pwp.mongodb.net/?retryWrites=true&w=majority&appName=foodsub')
    .on('open',()=>{
    console.log('MongoDb connected');
}).on('error',()=>{
    console.log('MongoDb error');
});

module.exports = connection;
