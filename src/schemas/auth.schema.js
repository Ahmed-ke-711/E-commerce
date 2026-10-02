import z from "zod"
export const schema = z.object({
    Name : z.string().min(3, "min 3").max(20, "max 20"),
    email : z.email("invalid email"),
    password: z
    .string()
    .min(8, "invalid password")
    .regex(/[A-Z]/, "invalid password")
    .regex(/[a-z]/, "invalid password")
    .regex(/[0-9]/, "invalid password"),
    rePassword : z.string(),
    phone: z.string().regex(/^01[0125][0-9]{8}$/, "invalid phone")
}).refine((data)=>data.password === data.rePassword, {
    message: "Not matched",
    path: ["rePassword"],
})