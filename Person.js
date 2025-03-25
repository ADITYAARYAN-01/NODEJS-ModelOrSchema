const mongoose = require('mongoose');
const personschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    work: {
        type: String,
        enum: ["Chef", "Waiter", "Manager","Halwai","Sweeper"],
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String
    },
    Salary: {
        type: String,
        required: true
    }
})
// creating person model
const Person = mongoose.model("Person", personschema);
module.exports = Person;

// const mongoose = require('mongoose');
// const PersonSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     age: {
//         type: Number,
//     },
//     work: {
//         type: String,
//         enum: ["Chef", "Waiter", "Manager", "Halwai"],
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     address: {
//         type: String
//     },
//     Salary: {
//         type: String,
//         required: true
//     }
// })

// const Person = mongoose.model("Person", PersonSchema);
// module.export = Person;
