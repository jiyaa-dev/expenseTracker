import Joi from "joi";
const registrationValidationSchema = Joi.object({
    firstName: Joi.string().trim().required().min(2).max(50),
    lastName: Joi.string().trim().required().min(1),
    email: Joi.string().email().required().trim().min(5).max(500),
    password: Joi.string()
        .pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        )
        .required(),
});
export { registrationValidationSchema };
