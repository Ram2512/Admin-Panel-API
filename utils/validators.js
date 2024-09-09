const Joi = require('joi');

const userSignupSchema = Joi.object({
    username: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().valid('Admin', 'Manager', 'Employee').required()
});

const userLoginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

const projectSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().optional()
});

module.exports = {
    userSignupSchema,
    userLoginSchema,
    projectSchema
};
