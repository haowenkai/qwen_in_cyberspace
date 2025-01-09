const userModel = require('../models/user');

exports.getUser = (req, res) => {
  res.json(userModel.getUser());
};

exports.updateUser = (req, res) => {
  console.log('req.body:', req.body);
  const updatedUser = req.body;
  userModel.updateUser(updatedUser);
  res.json(userModel.getUser());
};
