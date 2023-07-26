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
  const [profilePicture, setProfilePicture] = useState<String | null>(null);
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
    const data = new FormData();
    data.append("file", selectedFile);
    data.append("user", userData.username);
    console.log(selectedFile);
    const response = await fetch("http://localhost:8000/edit", {
      method: "POST",

      body: data,
    });
    const reply = await response.json();
    setProfilePicture(reply.file);
    console.log(reply.file);
  };

  return (
    <div className={styles.box}>
      <div className={styles.wrapper}>
        <Popup
          trigger={editButton}
          setTrigger={setEditButton}
          className={styles.popup}
        >
          <div className={styles.edit_profile}>
            <input
              onChange={handleInput}
              type="file"
              id="file"
              accept="image/*"
              className={styles.file}
            />
          
            <label htmlFor="file"><img src="../logos/image.svg" className={styles.icon} />Choose a photo</label>
           <textarea name="" id="" cols="30" rows="10" className={styles.biography} placeholder="Enter your biography"/>
           <input type="text" className={styles.location} placeholder="Enter your location" />
           <input
              onChange={handleInput}
              type="file"
              id="music"
              accept="audio/*"
              className={styles.file}

            />
            <label htmlFor="music"><img src="../logos/music.svg" className={styles.icon} />Choose a profile music</label>

            <button onClick={handleSubmit}>Submit</button>
          </div>
        </Popup>
        <div className={styles.left}>
          <img src="http://localhost:8000/image" alt="user" width="100" />

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
