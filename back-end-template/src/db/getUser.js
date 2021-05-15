import { db } from "./db";

export const getUser = async (userId) => {
  const user = db.getConnection().collection("users").findOne({ id: userId });
  return user;
};
