import { User } from "../../models/User";
import bcrypt from "bcrypt";

// export default defineEventHandler(async () => {
//   try {
//     const users = await User.find();
//     return users;
//   } catch (error) {
//     throw createError({
//       statusCode: 500,
//       statusMessage: "Failed to fetch users",
//     });
//   }
// });

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { username, email, password } = body;
    console.log("Signup request received:", { username, email });

    // Validate required fields
    if (!username || !email || !password) {
      throw createError({
        statusCode: 400,
        statusMessage: "Missing required fields: username, email, password",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw createError({
        statusCode: 400,
        statusMessage: "Email already in use",
      });
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    return { message: "User created successfully" };
  } catch (error) {
    console.error("Signup error:", error);

    // Re-throw if already a formatted error
    if (error.statusCode) {
      throw error;
    }

    throw createError({
      statusCode: 500,
      statusMessage: `Failed to create user: ${error.message}`,
    });
  }
});
