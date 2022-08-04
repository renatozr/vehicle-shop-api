import { model as mongooseCreateModel, Schema } from 'mongoose';
import Model from './Model';
import { IMotorcycle } from '../interfaces/IMotorcycle';

const motorcycleMongooseSchema = new Schema<IMotorcycle>({
  model: String,
  year: Number,
  color: String,
  status: { type: Boolean, required: false },
  buyValue: Number,
  category: String,
  engineCapacity: Number,
}, {
  versionKey: false,
});

export default class MotorcycleModel extends Model<IMotorcycle> {
  constructor(
    model = mongooseCreateModel('Motorcycle', motorcycleMongooseSchema),
  ) {
    super(model);
  }
}