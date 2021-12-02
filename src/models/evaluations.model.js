const mongoose = require('mongoose');

const evaluationSchema = new mongoose.Schema(
    {
        date_of_evaluation: { type: Date, required: true },
        instructor : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'users',
            required: true
        },
        topic_name : { 
            type: mongoose.Schema.Types.String,
            ref : 'topics',
            required: true   
        }
    },
    {
        versionKey: false,
        timestamps: true,
    },
);

module.exports = mongoose.model('evaluations' ,evaluationSchema );
