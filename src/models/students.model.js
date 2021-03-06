const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
    {
        roll_id: { type: Number, required: true, unique: true },
        current_batch: { type: String, required: true },
        user_id : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'users',
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true,
    },
);

module.exports = mongoose.model('students' ,studentSchema );
