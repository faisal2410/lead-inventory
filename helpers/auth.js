const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


exports.generateToken = (userInfo) => {
 
  const payload = {
    email: userInfo.email,
    _id:userInfo._id,
    role: userInfo.role,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "7days"
  });

  return token;
};

exports.hashPassword = (password) => {
  const hash = bcrypt.hashSync(password);
  return hash;
};

exports.comparePassword = (password, hash) => {
  const isPasswordValid = bcrypt.compareSync(password, hash);
  return isPasswordValid;
};