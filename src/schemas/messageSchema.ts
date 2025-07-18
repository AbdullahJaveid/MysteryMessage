import {z} from 'zod';

export const messageSchema = z.object({
    acceptMessages: z
    .string()
    .min(10, {message: "Message must be at least 10 characters long."})
    .max(500, {message: "Message must be at most 500 characters long."})
}) 