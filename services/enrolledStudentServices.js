const enrolledStudentRepo = require("../database/repositories/enrolledStudentRepository");

// Function to enroll a student
const enrollStudent = async (studentID, courses) => {
    try {
      // Validate input parameters
      console.log(studentID, courses);
      if (!studentID || !courses || !Array.isArray(courses)) {
        return {
          status: 400,
          message: "Failed to enroll student: Missing required parameters or invalid courses array.",
        };
      }
  
      // Create enrolled student object
      const enrolledStudentData = {
        studentID,
        courses,
      };
  
      // Call repository function to enroll student
      const enrolledStudent = await enrolledStudentRepo.enrollStudent(enrolledStudentData);
  
      return {
        status: 200,
        message: "Student enrolled successfully.",
        data: enrolledStudent, // Return the newly enrolled student object
      };
    } catch (error) {
      console.error("Error enrolling student:", error.message);
      return {
        status: 500,
        message: "Failed to enroll student: Internal server error.",
        error: error, // Return the error details
      };
    }
  };
// Function to update an enrolled student by ID
const updateEnrolledStudentById = async (id, studentID, updatedCourses) => {
    try {
      // Check if id is provided
      if (!id) {
        return {
          status: 400,
          message: "Failed to update enrolled student: Missing record ID.",
        };
      }
  
      // Check if studentID or updatedCourses is provided
      if (!studentID && !updatedCourses) {
        return {
          status: 400,
          message: "Failed to update enrolled student: Missing updated student data.",
        };
      }
  
      const updatedStudent = await enrolledStudentRepo.updateEnrolledStudentById(
        id,
        studentID,
        updatedCourses
      );
  
      if (!updatedStudent) {
        return {
          status: 404,
          message: "Enrolled student not found.",
        };
      }
  
      return {
        status: 200,
        message: "Enrolled student updated successfully.",
        data: updatedStudent,
      };
    } catch (error) {
      console.error("Error updating enrolled student:", error.message);
      return {
        status: 500,
        message: "Failed to update enrolled student: Internal server error.",
        error: error,
      };
    }
  };

// Function to get an enrolled student by ID
const getEnrolledStudentById = async (id) => {
  try {
    const enrolledStudent = await enrolledStudentRepo.getEnrolledStudentById(id);
    return enrolledStudent;
  } catch (error) {
    console.error("Error getting enrolled student:", error.message);
    throw {
      status: 500,
      message: "Failed to get enrolled student: Internal server error.",
      error: error,
    };
  }
};

const getAllEnrollments = async () => {
    try {
      // Call repository function to get all enrollments
      const enrollments = await enrolledStudentRepo.getAllEnrollments();
      return enrollments;
    } catch (error) {
      console.error("Error getting all enrollments:", error.message);
      throw {
        status: 500,
        message: "Failed to get all enrollments: Internal server error.",
        error: error,
      };
    }
  };

  const deleteEnrolledStudentById = async (id) => {
    try {
      // Call repository function to delete enrolled student
      const deletedStudent = await enrolledStudentRepo.deleteEnrolledStudentById(id);
  
      if (!deletedStudent) {
        return {
          status: 404,
          message: "Enrolled student not found.",
        };
      }
  
      return {
        status: 200,
        message: "Enrolled student deleted successfully.",
        data: deletedStudent,
      };
    } catch (error) {
      console.error("Error deleting enrolled student:", error.message);
      return {
        status: 500,
        message: "Failed to delete enrolled student: Internal server error.",
        error: error,
      };
    }
  };
  
  module.exports = {
    enrollStudent,
    updateEnrolledStudentById,
    getEnrolledStudentById,
    getAllEnrollments,
    deleteEnrolledStudentById
  };