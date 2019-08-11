const express = require('express');
const multer = require('multer');

const PostController = require('./controllers/PostController');
const ScheduleController = require('./controllers/ScheduleAppointmentController');

const upload = multer();

const routes = new express.Router();

routes.get('/schedule', ScheduleController.index);

routes.post('/schedule', upload.single(), ScheduleController.store);
routes.post('/posts', upload.single('image'), PostController.store);

module.exports = routes;