const mongoose = require('mongoose');
const DISHSchema = new mongoose.Schema({
    name:{
        type : String,
        required: true
    },
    drinks:{
        type : Boolean,
        default : false
    },
    flavour:{
        type : String,
        enum : ['Sweet','Salty','Spicy'],
        required: true
    },
    No_OF_PERSONS:{
        type : Number,
        required: true
    }
})
const DISH = mongoose.model('DISH',DISHSchema);
module.exports = DISH;