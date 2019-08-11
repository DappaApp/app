const ScheduleAppointment = require('../models/ScheduleAppointment');

module.exports = {
    async index(req, res){
        const schedules = await ScheduleAppointment.find().sort('-createdAt');

        return res.json(schedules);
    },

    async store(req, res){
        const { name, email, tel } = req.body;
        const scheduleappointment = await ScheduleAppointment.create({
            name,
            email,
            tel
        });
        return res.json(scheduleappointment);
    },
}