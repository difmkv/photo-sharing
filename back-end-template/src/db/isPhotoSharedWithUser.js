import { getPhoto } from "./getPhoto";

export const isPhotoSharedWithUser = async (userId, photoId) => {
  const photo = await getPhoto(photoId);
  return photo.sharedWith.includes(userId);
};
