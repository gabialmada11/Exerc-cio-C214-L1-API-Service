const Users = require('../application/users_service');
const Utils = require('../utils/utils');

const route = '/users';

module.exports = (app) => {
    app.post(`${route}/create`, async (req, res) => {
        const response = await Users.create(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });

    app.get(`${route}/list`, async (req, res) => {
        const response = await Users.list();
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
};