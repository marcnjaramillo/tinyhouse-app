import { MongoClient } from 'mongodb';

import { Database, User, Listing, Booking } from '../lib/types';

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net`;

export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const db = client.db('main');

  return {
    users: db.collection<User>('users'),
    listings: db.collection<Listing>('listings'),
    bookings: db.collection<Booking>('bookings')
  };
};
