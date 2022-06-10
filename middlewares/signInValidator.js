import joi from "joi";

export function validateSignIn(req, res, next) {
    const login = req.body;
  
    const signInSchema = joi.object({
      name: joi.string().required(),
      password: joi.string().required()
    });
  
    const validation = signInSchema.validate(login);
    if(validation.error) {
      res.status(422).send(validation.error.details);
      return;
    }
  
    next();
  }

