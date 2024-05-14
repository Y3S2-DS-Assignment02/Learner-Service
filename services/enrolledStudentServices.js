const enrolledStudentRepo = require("../database/repositories/enrolledStudentRepository");


const enrollStudent = async (studentID, courses) => {
    try {
     
      console.log(studentID, courses);
      if (!studentID || !courses || !Array.isArray(courses)) {
        return {
          status: 400,
          message: "Failed to enroll student: Missing required parameters or invalid courses array.",
        };
      }
  
     
      const enrolledStudentData = {
        studentID,
        courses,
      };
  
     
      const enrolledStudent = await enrolledStudentRepo.enrollStudent(enrolledStudentData);
  
      return {
        status: 200,
        message: "Student enrolled successfully.",
        data: enrolledStudent, 
      };
    } catch (error) {
      console.error("Error enrolling student:", error.message);
      return {
        status: 500,
        message: "Failed to enroll student: Internal server error.",
        error: error, 
      };
    }
  };

const updateEnrolledStudentById = async (id, studentID, updatedCourses) => {
    try {
      
      if (!id) {
        return {
          status: 400,
          message: "Failed to update enrolled student: Missing record ID.",
        };
      }
  
      
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

  const getEnrollmentsByCourseId = async (courseId) => {
    try {
      const enrollments = await enrolledStudentRepo.getEnrollmentsByCourseId(courseId);
      return enrollments;
    } catch (error) {
      console.error("Error getting enrollments by courseId:", error.message);
      throw {
        status: 500,
        message: "Failed to get enrollments by courseId: Internal server error.",
        error: error,
      };
    }
  };
  
  module.exports = {
    enrollStudent,
    updateEnrolledStudentById,
    getEnrolledStudentById,
    getAllEnrollments,
    deleteEnrolledStudentById,
    getEnrollmentsByCourseId
  };