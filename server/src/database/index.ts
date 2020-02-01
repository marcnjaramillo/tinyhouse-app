import { MongoClient } from 'mongodb';

import { Database } from '../lib/types';

const user = 'XXXXX';
const userPassword = 'XXXXXX';
const cluster = 'cluster0-n35od';

const url = `mongodb+srv://${user}:${userPassword}@${cluster}.mongodb.net`;

export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const db = client.db('main');

  return {
    listings: db.collection('test_listings')
  };
};
