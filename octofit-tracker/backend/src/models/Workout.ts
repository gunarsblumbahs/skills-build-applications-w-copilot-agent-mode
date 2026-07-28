import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IWorkout extends Document {
  name: string;
  difficulty: string;
  duration: number;
  focus: string;
}

const workoutSchema = new Schema<IWorkout>({
  name: { type: String, required: true, unique: true },
  difficulty: { type: String, required: true },
  duration: { type: Number, required: true },
  focus: { type: String, required: true },
});

const Workout: Model<IWorkout> = mongoose.model<IWorkout>('Workout', workoutSchema);

export default Workout;
