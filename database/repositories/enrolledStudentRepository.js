const EnrolledStudent = require("../models/Enrolled");

// Function to enroll a student
const enrollStudent = async (enrolledStudentData) => {
  try {
    const newEnrolledStudent = new EnrolledStudent(enrolledStudentData);
    return await newEnrolledStudent.save();
  } catch (error) {
    console.error("Error enrolling student:", error.message);
    throw new Error("Error enrolling student");
  }
};

// Function to update an enrolled student by record ID
const updateEnrolledStudentById = async (id, studentID, updatedCourses) => {
  try {
    // Find the enrolled student by its ID
    let enrolledStudent = await EnrolledStudent.findById(id);
    if (!enrolledStudent) {
      throw new Error("Enrolled student not found");
    }

    // Update the student ID and courses of the enrolled student
    enrolledStudent.studentID = studentID || enrolledStudent.studentID;
    enrolledStudent.courses = updatedCourses || enrolledStudent.courses;

    // Save the updated enrolled student
    await enrolledStudent.save();

    return enrolledStudent;
  } catch (error) {
    console.error("Error updating enrolled student:", error.message);
    throw new Error("Error updating enrolled student");
  }
};

// Function to get an enrolled student by ID
const getEnrolledStudentById = async (id) => {
  try {
    // Find the enrolled student by its ID
    const enrolledStudent = await EnrolledStudent.findById(id);
    return enrolledStudent;
  } catch (error) {
    console.error("Error getting enrolled student:", error.message);
    throw new Error("Error getting enrolled student");
  }
};

const getAllEnrollments = async () => {
    try {
      // Find all enrolled students
      const enrollments = await EnrolledStudent.find();
      return enrollments;
    } catch (error) {
      console.error("Error getting all enrollments:", error.message);
      throw new Error("Error getting all enrollments");
    }
  };

  const deleteEnrolledStudentById = async (id) => {
    try {
      const deletedStudent = await EnrolledStudent.findByIdAndDelete(id);
      if (!deletedStudent) {
        throw new Error("Enrolled student not found");
      }
      return deletedStudent;
    } catch (error) {
      console.error("Error deleting enrolled student:", error.message);
      throw new Error("Error deleting enrolled student");
    }
  };
  
  module.exports = {
    enrollStudent,
    updateEnrolledStudentById,
    getEnrolledStudentById,
    getAllEnrollments,
    deleteEnrolledStudentById
  };


