"use server";

import { z } from "zod";
// import { redirect } from "next/navigation";

export type FormState = {
  success: boolean;
  error?: {
    UserName?: string[];
    Email?: string[];
    Password?: string[];
    WorkspaceName?: string[];
  };
};

const formSchema = z.object({
  UserName: z.string().min(2, "Please enter a name with at least 2 characters"),
  Email: z.string().email("Please enter a valid email"),
  WorkspaceName: z
    .string()
    .min(2, "Please enter a name with at least 2 characters")
    .optional(),
  Password: z
    .string()
    .min(7, "Your password must be at least 7 characters long"),
  // .regex(/[A-Z]/, "Your password must contain at least one uppercase letter")
  // .regex(/[a-z]/, "Your password must contain at least one lowercase letter")
  // .regex(/[0-9]/, "Your password must contain at least one number"),
});

export async function myAction(prevState: FormState, formData: FormData) {
  const raw = {
    UserName: formData.get("UserName"),
    Email: formData.get("Email"),
    WorkspaceName:
      formData.get("WorkspaceName")?.toString().trim() || undefined,
    Password: formData.get("Password"),
  };

  const result = formSchema.safeParse(raw);

  if (!result.success) {
    return {
      success: false,
      error: result.error.flatten().fieldErrors,
    };
  }
  return { success: true };
  // redirect("/dashboard"); in case i have dashboard page
}
