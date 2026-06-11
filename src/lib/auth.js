import { betterAuth } from "better-auth";
import { mongodbAdapter } from "@better-auth/mongo-adapter"; // 👈 ইমপোর্ট পাথ সবসময় এটাই হবে
import { MongoClient } from "mongodb";

// আপনার আসল MongoDB URI এখানে দিন
const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("online-browing-books");

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },

  database: mongodbAdapter(db), // 👈 বানানে 'db' যুক্ত করা হয়েছে
});
