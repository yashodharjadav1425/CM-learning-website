const { z } = require("zod");

// creating object schema

const signupSchema = z.object({
    username: z
        .string({ required_error: "Username is required" })
        .trim()
        .min(3, { message: "Username must be at least 3 characters" })
        .max(255, { message: "Username not be more than 255 characters" }),
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be at least 3 characters" })
        .max(255, { message: "Username not be more than 255 characters" }),
    phone: z
        .string({ required_error: "Phone is required" })
        .trim()
        .min(10, { message: "Phone number must be at least 10 numbers" })
        .max(20, { message: "Phone numbers not be more than 20 numbers" }),
    password: z
        .string({ required_error: "Password is required" })
        .min(6, { message: "Password must be at least 6 characters" })
        .max(1024, { message: "Password not be more than 1024 characters" })

})

module.exports = signupSchema;