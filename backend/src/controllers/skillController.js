const skillModel = require('../models/skill');

exports.getSkills = (req, res) => {
    res.json(skillModel.getSkills());
};
