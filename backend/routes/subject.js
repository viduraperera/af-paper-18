import express from "express";
import {createSubject, getSubject} from "../controllers/subject.js";

const router = express.Router();

router.post('/create', createSubject);
router.get('/', getSubject);


export  default router;