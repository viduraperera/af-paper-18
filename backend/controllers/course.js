import CoursesMessage from "../models/courses.js";

export const createCourse = async (req, res) =>{

    const course = req.body;
    const newCourse = new CoursesMessage(course);

    try{
        await newCourse.save();
        res.status(201).json(newCourse);

    }catch (error){
        res.status(409).json({message:error.message});
    }
}

export const getCourses = async (req, res) =>{

    try{
        const coursesMessage = await CoursesMessage.find({}).populate('subjects', 'name description amount');
        console.log(coursesMessage);
        res.status(200).json(coursesMessage);

    }catch (error){
        res.status(404).json({message:error.message});
    }
}

export const getSubjectsForCourse = async (req, res) =>{

    try{
        const coursesMessage = await CoursesMessage.findById(req.params.id).populate('subjects', 'name description amount')
            .then(data => {
                res.status(200).json({subjects:data.subjects});
            });

    }catch (error){
        res.status(404).json({message:error.message});
    }
}

export const calculateAmount = async (req, res) =>{

    try{
        const coursesMessage = await CoursesMessage.findById(req.params.id).populate('subjects', 'name description amount');
        let totalAmount = 0;
        if(coursesMessage.subjects.length > 0){
            coursesMessage.subjects.map((subject) =>{
                totalAmount = totalAmount + subject.amount;
            })
        }
        res.status(200).json({totalAmount});

    }catch (error){
        res.status(418).json({message:error.message});
    }
}