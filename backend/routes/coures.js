import express from "express";
import {createCourse, getCourses, getSubjectsForCourse, calculateAmount} from "../controllers/course.js";

const router = express();

router.post('/create', createCourse);
router.get('/', getCourses);
router.get('/:id', getSubjectsForCourse);
router.get('/amount/:id', calculateAmount);
export default router;