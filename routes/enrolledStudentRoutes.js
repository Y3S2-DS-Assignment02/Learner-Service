const express = require("express");
const { enrollStudent, updateEnrolledStudentById, getEnrolledStudentById, getAllEnrollments, deleteEnrolledStudentById, getEnrollmentsByCourseId } = require("../controllers/enrolledStudentController");

const router = express.Router();


router.post("/enroll", enrollStudent);


router.patch("/update/:id", updateEnrolledStudentById);


router.get("/get/:id", getEnrolledStudentById);

router.get("/enrollments", getAllEnrollments);

router.get("/enrollments/course/:courseId", getEnrollmentsByCourseId);

router.delete("/delete/:id", deleteEnrolledStudentById);

module.exports = router;
