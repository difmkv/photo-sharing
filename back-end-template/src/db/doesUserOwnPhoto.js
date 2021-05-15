import { getPhoto } from "./getPhoto";

export const doesUserOwnPhoto = async (userId, photoId) => {
  const photo = await getPhoto(photoId);
  return photo.ownerId === userId;
};
