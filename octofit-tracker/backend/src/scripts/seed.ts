import mongoose from 'mongoose';
import User from '../models/User';
import Team from '../models/Team';
import Activity from '../models/Activity';
import LeaderboardEntry from '../models/LeaderboardEntry';
import Workout from '../models/Workout';

// Seed the octofit_db database with test data
async function seedDatabase() {
  const connectionString = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/octofit_db';

  try {
    await mongoose.connect(connectionString);
    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.insertMany([
      { name: 'Ava Chen', email: 'ava@example.com', role: 'Captain', fitnessGoal: 'Marathon prep' },
      { name: 'Noah Patel', email: 'noah@example.com', role: 'Member', fitnessGoal: 'Strength gain' },
      { name: 'Mina Alvarez', email: 'mina@example.com', role: 'Coach', fitnessGoal: 'Mobility' },
    ]);

    const teams = await Team.insertMany([
      { name: 'Trailblazers', members: ['Ava Chen', 'Noah Patel', 'Mina Alvarez'], goal: 'Complete a 10K relay' },
      { name: 'Peak Performers', members: ['Liam Ortiz', 'Sara Kim'], goal: 'Master weekly strength goals' },
    ]);

    const activities = await Activity.insertMany([
      { type: 'Running', duration: 35, userId: users[0]._id.toString(), date: new Date('2026-07-25') },
      { type: 'Strength', duration: 50, userId: users[1]._id.toString(), date: new Date('2026-07-26') },
      { type: 'Yoga', duration: 25, userId: users[2]._id.toString(), date: new Date('2026-07-27') },
    ]);

    const leaderboardEntries = await LeaderboardEntry.insertMany([
      { userName: 'Ava Chen', points: 980, streak: 7 },
      { userName: 'Noah Patel', points: 912, streak: 4 },
      { userName: 'Mina Alvarez', points: 887, streak: 5 },
    ]);

    const workouts = await Workout.insertMany([
      { name: 'HIIT Circuit', difficulty: 'Intermediate', duration: 30, focus: 'Cardio' },
      { name: 'Mobility Flow', difficulty: 'Beginner', duration: 20, focus: 'Recovery' },
      { name: 'Power Builder', difficulty: 'Advanced', duration: 45, focus: 'Strength' },
    ]);

    console.log('Database seeding complete');
    console.log({ users: users.length, teams: teams.length, activities: activities.length, leaderboardEntries: leaderboardEntries.length, workouts: workouts.length });
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
  }
}

seedDatabase();
