import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ILeaderboardEntry extends Document {
  userName: string;
  points: number;
  streak: number;
}

const leaderboardEntrySchema = new Schema<ILeaderboardEntry>({
  userName: { type: String, required: true },
  points: { type: Number, required: true },
  streak: { type: Number, required: true },
});

const LeaderboardEntry: Model<ILeaderboardEntry> = mongoose.model<ILeaderboardEntry>('LeaderboardEntry', leaderboardEntrySchema);

export default LeaderboardEntry;
