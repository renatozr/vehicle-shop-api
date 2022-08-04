import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

export const MotorcycleZodSchema = z.object({
  category: z.union([
    z.literal('Street'),
    z.literal('Custom'),
    z.literal('Trail'),
  ]),
  engineCapacity: z.number().int().positive().lte(2500),
}).merge(VehicleZodSchema);

export type IMotorcycle = z.infer<typeof MotorcycleZodSchema>;