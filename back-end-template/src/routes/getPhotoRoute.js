import {
  getPopulatedPhoto,
  getSanitizedPhoto,
  doesUserOwnPhoto,
  isPhotoSharedWithUser,
} from "../db";

export const getPhotoRoute = {
  method: "get",
  path: "/photos/:photoId",
  handler: async (req, res) => {
    const user = req.user;
    const { photoId } = req.params;

    const userIsOwner = await doesUserOwnPhoto(user.user_id, photoId);
    const photoIsSharedWithUser = await isPhotoSharedWithUser(
      user.user_id,
      photoId
    );

    if (userIsOwner) {
      const photo = await getPopulatedPhoto(photoId);
      res.status(200).json(photo);
    } else if (photoIsSharedWithUser) {
      const photo = await getSanitizedPhoto(photoId);
      res.status(200).json(photo);
    } else {
      res.status(401).json({ message: "User is not allowed to access photo" });
    }
  },
};
