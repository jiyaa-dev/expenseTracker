import bcrypt from "bcrypt"
const hashGenerate = async (pass)=>{
    const generateHash = await bcrypt.hash(pass, 10);
    return generateHash;
}
export {hashGenerate}