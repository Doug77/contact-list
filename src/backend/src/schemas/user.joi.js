const joi = require('joi');

module.exports = joi.object({
  email: joi.string().email().required().messages({
    'string.email': '"email" must be a valid email',
    'any.required': '"email" is required',
  }),
  password: joi.string().min(6).required().messages({
    'string.length': '"password" length must be 6 characters long',
    'any.required': '"password" is required',
  }),
});
