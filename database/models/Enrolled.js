const mongoose = require('mongoose');


const enrolledStudentSchema = new mongoose.Schema({
    studentID: {
        type: String,
        required: true,
        //unique: true
    },
    courses: [
        {
            courseId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true
            },
            progress: {
                type: Number,
                default: 0
            }
        }
    ] 
});


const EnrolledStudent = mongoose.model('EnrolledStudent', enrolledStudentSchema);

module.exports = EnrolledStudent;


