import {
  doesUserOwnPhoto,
  sharePhotoWithUserByEmail,
  getPopulatedPhoto,
} from "../db";

export const shareWithEmailRoute = {
  method: "post",
  path: "/photos/:id/shared-with",
  handler: async (req, res) => {
    const photoId = req.params.id;
    const userId = req.user.user_id;
    const { email } = req.body;
    const isUserOwner = await doesUserOwnPhoto(userId, photoId);

    if (isUserOwner) {
      await sharePhotoWithUserByEmail(photoId, email);
      const updatedPhoto = await getPopulatedPhoto(photoId);
      res.status(200).json(updatedPhoto);
    } else {
      res.status(401).json({ message: "Only group owner can share a photo" });
    }
  },
};
