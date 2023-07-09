import React from "react";

function CreateProfile() {
  return (
    <div>
      <form
        action="http://localhost:8000/profilePicture"
        method="post"
        enctype="multipart/form-data"
      >
        <input id="file" name="file" type="file" />
        <button>Upload</button>
      </form>
    </div>
  );
}

export default CreateProfile;
