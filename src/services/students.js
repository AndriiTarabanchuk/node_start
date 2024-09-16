import { studentsModel } from '../db/models/student.js';

const getAllStudents = async () => {
  const students = await studentsModel.find();
  return students;
};

const getStudentsById = async (studentId) => {
  const students = await studentsModel.findById(studentId);
  return students;
};

export default { getAllStudents, getStudentsById };
