import { Router } from 'express';
import LeaderboardEntry from '../models/LeaderboardEntry';

const router = Router();

router.get('/', async (_req, res) => {
  const entries = await LeaderboardEntry.find({}).sort({ points: -1 });
  const items = entries.map((entry, index) => ({ rank: index + 1, ...entry.toObject() }));
  res.json({ message: 'Leaderboard resource', items });
});

export default router;
