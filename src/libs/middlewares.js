import express from 'express';

module.exports = app => {
    app.set('port', 3000);
    app.use(express.json());
};
