const enrolledStudentService = require("../services/enrolledStudentServices");


const enrollStudent = async (req, res) => {
  try {
    const { studentID, courses } = req.body;
    console.log(req.body);

    
    const response = await enrolledStudentService.enrollStudent(studentID, courses);

   
    res.status(response.status).send({
      data: response.data || {}, 
      message: response.message, 
    });
  } catch (error) {
    console.error("Error enrolling student", error);
    res.status(500).send({ data: {}, message: "Error enrolling student" });
  }
};


const updateEnrolledStudentById = async (req, res) => {
  try {
    const { id } = req.params; 
    const { studentID, courses } = req.body;

    
    const response = await enrolledStudentService.updateEnrolledStudentById(id, studentID, courses);

   
    res.status(response.status).send({
      data: response.data || {}, 
      message: response.message, 
    });
  } catch (error) {
    console.error("Error updating enrolled student:", error);
    res.status(500).send({ data: {}, message: "Error updating enrolled student" });
  }
};


const getEnrolledStudentById = async (req, res) => {
  try {
    const { id } = req.params; 

   
    const enrolledStudent = await enrolledStudentService.getEnrolledStudentById(id);

   
    if (!enrolledStudent) {
      return res.status(404).send({ message: "Enrolled student not found" });
    }

    
    res.status(200).send(enrolledStudent);
  } catch (error) {
    console.error("Error getting enrolled student:", error);
    res.status(500).send({ data: {}, message: "Error getting enrolled student" });
  }
};

const getAllEnrollments = async (req, res) => {
  try {
   
    const enrollments = await enrolledStudentService.getAllEnrollments();

    
    res.status(200).send(enrollments);
  } catch (error) {
    console.error("Error getting all enrollments:", error);
    res.status(500).send({ data: {}, message: "Error getting all enrollments" });
  }
};

const deleteEnrolledStudentById = async (req, res) => {
  try {
    const { id } = req.params; 

    
    const response = await enrolledStudentService.deleteEnrolledStudentById(id);

    
    res.status(response.status).send({
      data: response.data || {}, 
      message: response.message, 
    });
  } catch (error) {
    console.error("Error deleting enrolled student:", error);
    res.status(500).send({ data: {}, message: "Error deleting enrolled student" });
  }
};

const getEnrollmentsByCourseId = async (req, res) => {
  try {
    const { courseId } = req.params; 

    const enrollments = await enrolledStudentService.getEnrollmentsByCourseId(courseId);

    res.status(200).send(enrollments);
  } catch (error) {
    console.error("Error getting enrollments by courseId:", error);
    res.status(500).send({ data: {}, message: "Error getting enrollments by courseId" });
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
