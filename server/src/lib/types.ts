import { Collection, ObjectId } from 'mongodb';

export interface User {
  _id: ObjectId;
}

export interface Listing {
  _id: ObjectId;
}

export interface Booking {
  _id: ObjectId;
}

export interface Database {
  users: Collection<User>;
  listings: Collection<Listing>;
  bookings: Collection<Booking>;
}
