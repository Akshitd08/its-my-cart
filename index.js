const express = require('express');
const router = express.Router();
const { Student } = require('./student');

//Show all students
router.get('/api/std', (req, res) => {
    Student.find({}, (err, data) => {
        if (!err) {
            res.send(data);
        }
        else {
            console.log(err);
        }
    });

});

// Save Students
router.post('/api/std/add', (req, res) => {
    const st = new Student({
        name: req.body.name,
        class: req.body.class,
        course: req.body.course
    });
    st.save((err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'Student Added Successfully',addStudent:data})
        } else {
           console.log(err);
        }
    });
});



// Update Student

router.put('/api/std/update/:id', (req, res) => {


    const st = {
        name: req.body.name,
        class: req.body.class,
        course: req.body.course
    };
    Student.findByIdAndUpdate(req.params.id, { $set: st }, { new: true }, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'std Updated Successfully', updateStudent: data})
        } else {
            console.log(err);
        }
    });
});





// Delete Student
router.delete('/api/std/:id', (req, res) => {

    Student.findByIdAndRemove(req.params.id, (err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'Student deleted', deleteStudent: data})
        } else {
            console.log(err);
        }
    });
});



module.exports = router;