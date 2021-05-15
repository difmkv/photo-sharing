import { useState } from "react";
import { useHistory } from "react-router-dom";

import { uploadFile } from "../data";

export const UploadPhotoPage = () => {
  const [titleValue, setTitleValue] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const history = useHistory();

  const beginUpload = async () => {
    const formData = new FormData();
    formData.append("title", titleValue);
    formData.append("file", selectedFile);
    await uploadFile("/upload", formData);
    alert("Succesfully uploaded photo!");
    history.push("/");
  };

  return (
    <div className="centered-container">
      <h1>Upload New Photo</h1>
      <label>Title</label>
      <input
        type="text"
        placeholder="Enter a title for the new photo"
        className="full-width space-after"
        value={titleValue}
        onChange={(e) => setTitleValue(e.target.value)}
      />
      <input
        type="file"
        className="full-width space-after"
        accept="image/png, image/jpeg"
        onChange={(e) => {
          const file = e.target.files[0];
          setSelectedFile(file);
        }}
      />
      <button className="full-width" onClick={beginUpload}>
        Upload
      </button>
    </div>
  );
};
