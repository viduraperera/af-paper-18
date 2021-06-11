import SubjectMessage from "../models/subject.js";

export const createSubject = async (req, res) =>{

    const subject = req.body;
    const newSubject = new SubjectMessage(subject);

    try{
        await newSubject.save();
        res.status(201).json(newSubject);

    }catch (error){
        res.status(409).json({message:error.message});
    }
}

export const getSubject  = async (req, res) =>{

    try{
        const subjectMessage =await SubjectMessage.find();
        console.log(subjectMessage);
        res.status(200).json(subjectMessage);

    }catch (error){
        res.status(500).send({message: error.message});
    }
}