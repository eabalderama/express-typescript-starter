import { Prisma } from '@prisma/client';
import { z } from 'zod';

export const UserSchema = z.object({
    email: z
        .string({
            required_error: 'Email is required',
        })
        .trim()
        .min(1, 'Email cannot be empty')
        .email('Email is invalid'),
    password: z.string().optional().nullable(),
    first_name: z.string({ required_error: 'First name is required' }).min(1, 'First name cannot be empty'),
    last_name: z.string({ required_error: 'Last name is required' }).min(1, 'Last name cannot be empty'),
}) satisfies z.Schema<Prisma.UserUncheckedCreateInput>;

const UserWithId = UserSchema.merge(z.object({ id: z.number() }));

export type User = z.infer<typeof UserWithId>;

export type CreateuserDto = z.infer<typeof UserSchema>;

const UserSchemaPartial = UserSchema.partial().omit({ password: true });

export type UpdateUserDto = z.infer<typeof UserSchemaPartial>;
