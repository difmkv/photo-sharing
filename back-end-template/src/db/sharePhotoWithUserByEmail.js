import { ObjectID } from "mongodb";
import { db } from "./db";

export const sharePhotoWithUserByEmail = async (photoId, email) => {
  const connection = await db.getConnection();
  const user = await connection.collection("users").findOne({ email });
  if (user) {
    await connection.collection("photos").updateOne(
      { _id: ObjectID(photoId) },
      {
        $addToSet: { sharedWith: user.id },
      }
    );
  }
};
