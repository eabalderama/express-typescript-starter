import { PrismaClient } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import { ApiErrorCode } from '../constant/enums';
import { createUser } from './user.service';
import { z } from 'zod';
import { UserSchema } from './user.schema';

const prisma = new PrismaClient();

export const store = async (req: Request, res: Response): Promise<Response> => {
    try {
        // Validate payload
        const payload = await UserSchema.parseAsync(req.body);

        const count = await prisma.user.count({
            where: {
                email: payload.email,
            },
        });

        if (count) {
            return res.status(422).json({
                success: false,
                message: ApiErrorCode.VALIDATION,
                error: [{ path: 'email', message: 'Email already in use' }],
            });
        }

        // Create the user
        const result = await createUser(payload);

        return res.status(201).json({ success: true, data: result });
    } catch (error) {
        let err = error;
        if (err instanceof z.ZodError) {
            err = err.issues.map((e) => ({ path: e.path[0], message: e.message }));
        }

        return res.status(422).json({
            success: false,
            message: ApiErrorCode.VALIDATION,
            error: err,
        });
    }
};
