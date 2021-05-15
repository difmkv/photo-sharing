import { getMyPhotosRoute } from "./getMyPhotosRoute";
import { getSharedWithMePhotosRoute } from "./getSharedWithMePhotosRoute";
import { getPhotoRoute } from "./getPhotoRoute";
import { uploadPhotoRoute } from "./uploadPhotoRoute";
import { shareWithEmailRoute } from "./shareWithEmailRoute";

export { protectRouteMiddleware } from "./protectRouteMiddleware";
export const routes = [
  getMyPhotosRoute,
  getSharedWithMePhotosRoute,
  getPhotoRoute,
  uploadPhotoRoute,
  shareWithEmailRoute,
];
