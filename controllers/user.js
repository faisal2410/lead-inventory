const { signupService, findUserByEmail, findUserByToken } = require("../services/user");

const {generateToken}=require("../helpers/auth")

exports.signup = async (req, res) => {
  try {
    const user = await signupService(req.body);

    const token = user.generateConfirmationToken();

    await user.save({ validateBeforeSave: false });
   
    res.status(200).json({
      status: "success",
      message: "Successfully signed up",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "fail",
      message:error.message
    });
  }
};


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        status: "fail",
        error: "Please provide your credentials",
      });
    }

    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(401).json({
        status: "fail",
        error: "No user found. Please create an account",
      });
    }

    const isPasswordValid = user.comparePassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(403).json({
        status: "fail",
        error: "Password is not correct",
      });
    }

    if (user.status != "active") {
      return res.status(401).json({
        status: "fail",
        error: "Your account is not active yet.",
      });
    }

    const token = generateToken(user);
     user.password = undefined;
     // send token in cookie
     res.cookie("token", token, {
      httpOnly: true,
      // secure: true, // only works on https
    });

     // send user as json response

    res.status(200).json({
      status: "success",
      message: "Successfully logged in",
      data: {
        user,
        token,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error: error.message,
    });
  }
};

exports.getMe = async (req, res) => {
  try {
    const user = await findUserByEmail(req.auth?.email);
    
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error,
    });
  }
};

exports.confirmEmail = async (req, res) => {
  try {
    const { token } = req.params;


    const user = await findUserByToken(token);

    if(!user){
      return res.status(403).json({
        status: "fail",
        error: "Invalid token"
      });
    }

    const expired = new Date() > new Date(user.confirmationTokenExpires);

    if(expired){
      return res.status(401).json({
        status: "fail",
        error: "Token expired"
      });
    }

    user.status = "active";
    user.confirmationToken = undefined;
    user.confirmationTokenExpires = undefined;

    user.save({ validateBeforeSave: false });

    res.status(200).json({
      status: "success",
      message: "Successfully activated your account.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "fail",
      error,
    });
  }
};
