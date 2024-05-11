const enrolledStudentService = require("../services/enrolledStudentServices");

// Function to enroll a student
const enrollStudent = async (req, res) => {
  try {
    const { studentID, courses } = req.body;
    console.log(req.body);

    // Call the enrolled student service to enroll the student
    const response = await enrolledStudentService.enrollStudent(studentID, courses);

    // Send the appropriate response
    res.status(response.status).send({
      data: response.data || {}, // Send the response data if available
      message: response.message, // Default message if not provided
    });
  } catch (error) {
    console.error("Error enrolling student", error);
    res.status(500).send({ data: {}, message: "Error enrolling student" });
  }
};

// Function to update an enrolled student by record ID
const updateEnrolledStudentById = async (req, res) => {
  try {
    const { id } = req.params; // Record ID
    const { studentID, courses } = req.body;

    // Call the enrolled student service to update the enrolled student by ID
    const response = await enrolledStudentService.updateEnrolledStudentById(id, studentID, courses);

    // Send the appropriate response
    res.status(response.status).send({
      data: response.data || {}, // Send the response data if available
      message: response.message, // Default message if not provided
    });
  } catch (error) {
    console.error("Error updating enrolled student:", error);
    res.status(500).send({ data: {}, message: "Error updating enrolled student" });
  }
};

// Function to get an enrolled student by ID
const getEnrolledStudentById = async (req, res) => {
  try {
    const { id } = req.params; // Record ID

    // Call the enrolled student service to get the enrolled student by ID
    const enrolledStudent = await enrolledStudentService.getEnrolledStudentById(id);

    // If enrolled student is not found
    if (!enrolledStudent) {
      return res.status(404).send({ message: "Enrolled student not found" });
    }

    // Send the enrolled student data as response
    res.status(200).send(enrolledStudent);
  } catch (error) {
    console.error("Error getting enrolled student:", error);
    res.status(500).send({ data: {}, message: "Error getting enrolled student" });
  }
};

const getAllEnrollments = async (req, res) => {
  try {
    // Call the enrolled student service to fetch all enrollments
    const enrollments = await enrolledStudentService.getAllEnrollments();

    // Send the enrollments data as response
    res.status(200).send(enrollments);
  } catch (error) {
    console.error("Error getting all enrollments:", error);
    res.status(500).send({ data: {}, message: "Error getting all enrollments" });
  }
};

const deleteEnrolledStudentById = async (req, res) => {
  try {
    const { id } = req.params; // Record ID

    // Call the enrolled student service to delete the enrolled student by ID
    const response = await enrolledStudentService.deleteEnrolledStudentById(id);

    // Send the appropriate response
    res.status(response.status).send({
      data: response.data || {}, // Send the response data if available
      message: response.message, // Default message if not provided
    });
  } catch (error) {
    console.error("Error deleting enrolled student:", error);
    res.status(500).send({ data: {}, message: "Error deleting enrolled student" });
  }
};

module.exports = {
  enrollStudent,
  updateEnrolledStudentById,
  getEnrolledStudentById,
  getAllEnrollments,
  deleteEnrolledStudentById
};
