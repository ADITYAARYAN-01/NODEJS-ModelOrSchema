const mongoose = require('mongoose');
const Student_schema = new mongoose.Schema({
    StudentID : {
        type :Number,
        required : true,
        unique : true
    },
    Name : {
        type : String,
        required : true,
    },
    Age : {
        type : Number,
        required : true,
    },
    Gender : {
        type : String,
        required : true,
    },
    Email : {
        type : String,
        required : true,
    }
})
const Student = mongoose.model("Student",Student_schema);
module.exports = Student;