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

export const AskQuestionSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title is required of min 5 characters." })
    .max(100, { message: "Title caanot exceed 100 characters." }),

  content: z
    .string()
    .min(1, { message: "Content must be of atleast 1 characters" }),

  tags: z
    .array(
      z
        .string()
        .min(1, { message: "Tag is required." })
        .max(30, { message: "Tag caanot exceed 30 characters." })
    )
    .min(1, { message: "Min 1 tag is required." })
    .max(3, { message: "Max 3 tags are allowed." }),
});
