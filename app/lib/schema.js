import z from "zod";

export const accountSchema = z.object({
	name: z.string().min(1, "Account name is required"),
	type: z.enum(["CURRENT", "SAVINGS"]),
	balance: z.number().min(0, "Balance must be a positive number"),
	isDefault: z.boolean().default(false),
});
