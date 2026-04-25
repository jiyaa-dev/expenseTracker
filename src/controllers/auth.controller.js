import { User } from "../models/user.model.js";
import { registrationValidationSchema } from "../validations/auth.validation.js";
import { hashGenerate } from "../utils/hash.util.js";
import { ApiError } from "../error/api.error.js";
const registerController = async (req, res) => {
    const validateData = registrationValidationSchema.validate(req.body);
    if (validateData.error) {
        throw new ApiError(validateData.error.details[0].message, 422);
    }
    const { firstName, lastName, email, password } = validateData.value;
    const emailCheck = await User.findOne({ email: email });
    if (emailCheck) {
        throw new ApiError("Email Already exists!", 409);
    }

    const userRegister = await User.insertOne({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: await hashGenerate(password),
    });
    res.status(200).json({
        success: true,
        data: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            isVerified: userRegister.isVerified,
        },
    });
};
export { registerController };
