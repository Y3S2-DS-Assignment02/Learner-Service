const express = require("express");
const { enrollStudent, updateEnrolledStudentById, getEnrolledStudentById, getAllEnrollments, deleteEnrolledStudentById } = require("../controllers/enrolledStudentController");

const router = express.Router();

// POST endpoint for enrolling a student
router.post("/enroll", enrollStudent);

// PATCH endpoint for updating an enrolled student
router.patch("/update/:id", updateEnrolledStudentById);

// GET endpoint for getting an enrolled student by ID
router.get("/get/:id", getEnrolledStudentById);

router.get("/enrollments", getAllEnrollments);

router.delete("/delete/:id", deleteEnrolledStudentById);

module.exports = router;
