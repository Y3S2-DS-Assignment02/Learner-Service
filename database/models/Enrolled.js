const mongoose = require('mongoose');

// Define schema for enrolled student details
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
    ] // Embed course details within enrolled student document
});

// Create model for enrolled student
const EnrolledStudent = mongoose.model('EnrolledStudent', enrolledStudentSchema);

module.exports = EnrolledStudent;


