const mongoose = require('mongoose');
const ScheduleAppointmentSchema = new mongoose.Schema({
    name: String,
    email: String,
    tel: String,
},{
    timestamps: true,
});

module.exports = mongoose.model('ScheduleAppointment', ScheduleAppointmentSchema);