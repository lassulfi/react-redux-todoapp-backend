const express = require('express');

module.exports = function(server) {
    //API Routes
    const router = express.Router();
    server.use('/api', router);

    //TODO routes
    const todoService = require('../api/todo/todo-service');
    todoService.register(router, '/todos');
}