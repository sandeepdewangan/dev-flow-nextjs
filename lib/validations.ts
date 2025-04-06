import { z } from "zod";

export const SignInSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please provide a valid email address" }),

  password: z
    .string()
    .min(6, { message: "Password must be of atleast 6 characters" })
    .max(30, { message: "Password cannot exceed 30 characters." }),
});

export const SignUpSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be of min 3 characters long" })
    .max(30, { message: "Username cannot exceed 30 characters" })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Username can only contain letters, numbers and underscores.",
    }),
  name: z
    .string()
    .min(3, { message: "Name must be of min 3 characters long" })
    .max(30, { message: "Name cannot exceed 30 characters" })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Name can only contain letters and spaces.",
    }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please provide a valid email address" }),

  password: z
    .string()
    .min(6, { message: "Password must be of atleast 6 characters" })
    .max(30, { message: "Password cannot exceed 30 characters." })
    .regex(/[A-Z]/, {
      message: "Password must contain atleast one uppercase letter.",
    })
    .regex(/[a-z]/, {
      message: "Password must contain atleast one lowercase letter.",
    })
    .regex(/[0-9]/, {
      message: "Password must contain atleast one number.",
    })
    .regex(/[@#$%^&*]/, {
      message: "Password must contain atleast one special character (@#$%^&*).",
    }),
});
