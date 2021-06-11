import mongoose from "mongoose";

const subjectSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    amount:{
        type: Number,
        required: true,
        trim: true
    },
    courses:[
        {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: 'CoursesMessage'
        }
    ]
});

const SubjectMessage = mongoose.model('SubjectMessage', subjectSchema);

export default SubjectMessage;