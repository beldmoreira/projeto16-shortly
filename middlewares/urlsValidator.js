import joi from "joi";

export function validateUrls(req, res, next) {
    const newCategory = req.body;
  
    const urlSchema = joi.object({
      
    });
  
    const validation = urlSchema.validate(newCategory);
    if(validation.error) {
      res.status(422).send(validation.error.details);
      return;
    }
  
    next();
  }