import * as z from "zod";

export const UserSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  role: z.enum(["User", "Moderator", "Admin"]),
  status: z.enum(["active", "inactive"]),
  permission: z.array(z.enum(["read", "write", "delete"])),
});

export const EditUserSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  role: z.enum(["User", "Moderator", "Admin"]),
  status: z.enum(["active", "inactive"]),
  permission: z.string(),
});
