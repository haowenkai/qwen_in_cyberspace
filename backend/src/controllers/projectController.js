const projectModel = require('../models/project');

exports.getProjects = (req, res) => {
    res.json(projectModel.getProjects());
};
