export { db } from "./db";
export { getPhotosForUser } from "./getPhotosForUser";
export { getSharedPhotosForUser } from "./getSharedPhotosForUser";
export { getPopulatedPhoto } from "./getPopulatedPhoto";
export { getSanitizedPhoto } from "./getSanitizedPhoto";
export { doesUserOwnPhoto } from "./doesUserOwnPhoto";
export { isPhotoSharedWithUser } from "./isPhotoSharedWithUser";
export { addNewPhoto } from "./addNewPhoto";
export { sharePhotoWithUserByEmail } from "./sharePhotoWithUserByEmail";

/**
mongoimport --db photo-sharing --collection photos --jsonArray --file ./photos.json
mongoimport --db photo-sharing --collection users --jsonArray --file ./users.json
*/
