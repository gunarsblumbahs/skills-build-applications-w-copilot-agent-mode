import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IActivity extends Document {
  type: string;
  duration: number;
  date: Date;
  userId: string;
}

const activitySchema = new Schema<IActivity>({
  type: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  userId: { type: String, required: true },
});

const Activity: Model<IActivity> = mongoose.model<IActivity>('Activity', activitySchema);

export default Activity;
