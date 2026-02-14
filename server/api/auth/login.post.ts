import { User } from "../../models/User";
import bcrypt from "bcrypt";

export default defineEventHandler(async (event) => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch users",
    });
  }
});

export const post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { email, password } = body;
    const user = await User.findOne({ email });
    if (!user) {
      throw createError({
        statusCode: 400,
        statusMessage: "Invalid email or password",
      });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw createError({
        statusCode: 400,
        statusMessage: "Invalid email or password",
      });
    }
    return { message: "Login successful" };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to login",
    });
  }
});
