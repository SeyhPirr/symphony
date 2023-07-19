import React, { useEffect, useState } from "react";
import image from "./profile_pictures/image.png";
import styles from "../styles/profile.module.css";
import Popup from "./components/Popup";
import { useParams } from "react-router-dom";

function CreateProfile() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [editButton, setEditButton] = useState(false);
  const params = useParams();
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const username = params.username;
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });
      const reply = await response.json();
      setUserData(reply);

      console.log(reply);
    };
    fetchData().catch((err) => {
      console.error(err);
    });
  }, []);
  function handleInput(event) {
    return setSelectedFile(event.target.files[0]);
  }
  const handleSubmit = async () => {
    console.log(selectedFile);
    const response = await fetch("http://localhost:8000/edit", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/formdata",
      },
      body: new FormData(selectedFile),
    });
    const reply = await response.json();
    console.log(reply);
  };

  return (
    <div className={styles.box}>
      <div className={styles.wrapper}>
        <Popup trigger={editButton} setTrigger={setEditButton}>
          <div className="edit_profile">
            <input
              onChange={handleInput}
              type="file"
              name="profile_picture"
              accept="image/*"
            />
            <label htmlFor="profile_picture">Profile picture</label>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </Popup>
        <div className={styles.left}>
          <img src={image} alt="user" width="100" />

          <h4>{userData.username ? userData.username : "Username"}</h4>
          <button
            onClick={() => {
              setEditButton(true);
            }}
          >
            Edit your profile
          </button>
        </div>
        <div className={styles.right}>
          <div className={styles.biography}>
            <h3>Biography</h3>
            <p>{userData.biography ? userData.biography : ""}</p>
          </div>
          <div className={styles.projects}>
            <h3>information</h3>
            <div className={styles.info_data}>
              <div className={styles.data}>
                <h4>Email</h4>
                <p>{userData.email ? userData.email : ""}</p>
              </div>

              <div className={styles.data}>
                <h4>Location</h4>
                <p>{userData.location ? userData.location : ""}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProfile;
