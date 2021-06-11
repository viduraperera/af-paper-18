import mongoose from "mongoose";

const coursesSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    code:{
        type: String,
        required: true,
        trim: true
    },
    pass_mark:{
        type: Number,
        required: true,
        trim: true
    },
    lecture_in_charge:{
        type: String,
        required: true,
        trim: true
    },
    subjects:[
        {
            type: mongoose.Schema.Types.ObjectId,
            required:false,
            ref: 'SubjectMessage'
        }
    ]
});

const CoursesMessage = mongoose.model('CoursesMessage', coursesSchema);

export default CoursesMessage;