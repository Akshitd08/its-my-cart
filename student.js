let mongoose = require('mongoose');

const Student = mongoose.model('Student', {
    name: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    }

});
module.exports = { Student }