import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

export const CarZodSchema = z.object({
  doorsQty: z.number().gte(2).lte(4),
  seatsQty: z.number().gte(2).lte(7),
}).merge(VehicleZodSchema);

export type ICar = z.infer<typeof CarZodSchema>;