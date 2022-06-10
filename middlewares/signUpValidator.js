import joi from "joi";

export function validateSignUp(req, res, next) {
    const register = req.body;
  
    const signUpSchema = joi.object({
      name: joi.string().required(),
      email: joi.string().required(),
      password: joi.string().required(),
      confirmPassword: joi.string().required().equal(joi.ref("password")) 
    });
  
    const validation = signUpSchema.validate(register);
    if(validation.error) {
      res.status(422).send(validation.error.details);
      return;
    }
  
    next();
  }