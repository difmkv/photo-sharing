import { ObjectID } from "mongodb";
import { db } from "./db";

export const getPhoto = async (photoId) => {
  const photo = db
    .getConnection()
    .collection("photos")
    .findOne({ _id: ObjectID(photoId) });
  return photo;
};
