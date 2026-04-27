import Joi from "joi";
const verifyValidation = Joi.object({
    email: Joi.string().email().trim().required(),
    code: Joi.string().length(6).required(),
})
export {verifyValidation};