import Joi from "joi";
import { User } from "../../models";
const registerController = {
  //register user

  async register(req, res, next) {
    //user validation
    console.log("sads");
    const registerSchema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      email: Joi.string().email().required(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(), //3,30 characters
      confirm_password: Joi.ref("password"),
      imageUrl: Joi.string(),
      loginWith: Joi.string(),
    });

    const { error } = registerSchema.validate(req.body); //destructuring

    if (error) {
      return next(error);
    }

    try {
      const userObj = await User.findOne({ email: req.body.email });
      //  console.log(exists);
      if (userObj) {
        if (userObj.loginWith !== "pizazi") {
          //loginController
          loginController.loginWithParty(userObj);
          return res.status(200).json("logged in with google");
        } else {
          return next(CustomErrorHandler.alreadyExists("email already taken"));
        }
      }
    } catch (err) {
      // database error
      return next(err); // by default send the errorHandler default error --> status 500
    }

    const { name, email, password, loginWith } = req.body;
    console.log(name);

    //-------Hash password ------//
    const hashPassword = await bcrypt.hash(password, 10);

    //-------Prepare model --------//

    const user = new User({
      name,
      email,
      password: hashPassword,
      loginWith,
    });
    console.log(user);
  },
};

export default registerController;
