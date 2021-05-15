import { extname } from "path";
import { v4 as uuid } from "uuid";
import { addNewPhoto } from "../db";

export const uploadPhotoRoute = {
  method: "post",
  path: "/upload",
  handler: async (req, res) => {
    const user = req.user;
    const { title } = req.body;
    const { file } = req.files;

    const fileExtention = extname(file.name);
    const newFileName = uuid() + fileExtention;

    await addNewPhoto("/" + newFileName, title, user.user_id);

    file.mv("src/uploads/" + newFileName, (err) => {});

    res.status(200).json({ message: "Upload successful!" });
  },
};
