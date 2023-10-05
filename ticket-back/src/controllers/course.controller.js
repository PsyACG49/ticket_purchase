import Course from "../models/Course";

export const getCourses = async (req, res, next) => {
  try {
    const courses = await Course.find();
    return res.status(200).json(courses);
  } catch (error) {
    next(error);
  }
};
