import { useParams } from "react-router-dom";

import { postWithCredentials, useProtectedResource } from "../data";
import { useUser } from "../auth";
import { SharedEmailsList } from "./SharedEmailsList";

export const PhotoDetailPage = () => {
  const { id } = useParams();
  const { user } = useUser();

  const {
    isLoading,
    data: photo,
    setData: setPhoto,
  } = useProtectedResource(`/photos/${id}`, {});

  const isUserOwner = user.uid === photo.ownerId;

  const shareWithEmail = async (email) => {
    const response = await postWithCredentials(`/photos/${id}/shared-with`, {
      email,
    });
    const updatedPhoto = await response.json();
    setPhoto(updatedPhoto);
  };

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="centered-container">
      <h1>{photo.title}</h1>
      <img src={photo.url} alt={photo.title} width="750" />
      <div>
        {isUserOwner ? (
          <SharedEmailsList
            emails={photo.sharedWithEmails}
            onShare={shareWithEmail}
          />
        ) : null}
      </div>
    </div>
  );
};
