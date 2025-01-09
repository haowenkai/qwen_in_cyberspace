const user = {
  name: '您的名字',
  bio: '一段关于您的简短介绍。',
};

exports.getUser = () => {
  return user;
};

exports.updateUser = (updatedUser) => {
  if (updatedUser.name) {
    user.name = updatedUser.name;
  }
  if (updatedUser.bio) {
    user.bio = updatedUser.bio;
  }
};
