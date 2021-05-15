import { db } from "./db";

export const addNewPhoto = async (url, title, ownerId) => {
  const photo = await db
    .getConnection()
    .collection("photos")
    .insertOne({ url, title, ownerId, sharedWith: [] });
};
