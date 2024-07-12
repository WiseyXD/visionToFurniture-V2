import * as z from 'zod';

export const signupSchema = z.object({
    email: z.string().email(),
    password: z.string().min(7),
});

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, 'Password is required for Login'),
});

export const resetPasswordSchema = z
    .object({
        email: z.string().email(),
        password: z.string().min(7),
        reEnterPassword: z.string(),
    })
    .refine((data) => data.password === data.reEnterPassword, {
        message: "Passwords don't match",
        path: ['reEnterPassword'],
    });
