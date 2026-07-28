import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ITeam extends Document {
  name: string;
  members: string[];
  goal: string;
}

const teamSchema = new Schema<ITeam>({
  name: { type: String, required: true, unique: true },
  members: [{ type: String, required: true }],
  goal: { type: String, required: true },
});

const Team: Model<ITeam> = mongoose.model<ITeam>('Team', teamSchema);

export default Team;
