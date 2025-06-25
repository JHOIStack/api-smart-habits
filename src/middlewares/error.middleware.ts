import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

export const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  console.error('Error capturado ==> ', err);

  if (err instanceof ZodError) {
    const formatted = err.format();

    const errorMessages = Object.entries(formatted).reduce((acc, [key, value]) => {
      if (key !== '_errors' && value && typeof value === 'object' && '_errors' in value) {
        acc[key] = value._errors as string[];
      }
      return acc;
    }, {} as Record<string, string[]>);

    res.status(400).json({
      message: 'Datos inválidos',
      errors: errorMessages,
    });
    return;
  }

  if (err.code === 'P2002') {
    res.status(409).json({
      message: 'Dato duplicado',
      details: err.meta,
    });
    return;
  }

  res.status(500).json({ message: 'Error interno del servidor' });
};
