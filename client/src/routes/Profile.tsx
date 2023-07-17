import React, { useEffect, useState } from "react";
import image from "./profile_pictures/belisarius.jpg";
import styles from "../styles/profile.module.css";
import Popup from "./components/Popup";

function CreateProfile() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [editButton, setEditButton] = useState(false);

  const changeHandler = (event: any) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:8000/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: selectedFile,
    });
    const reply = await response.json();
    console.log(reply);
  };

  return (
    <div className={styles.box}>
      <div className={styles.wrapper}>
        <Popup trigger={editButton} setTrigger={setEditButton}>
          <h3>MY Popup</h3>
        </Popup>
        <div className={styles.left}>
          <img src={image} alt="user" width="100" />
          <h4>Flavius Belisarius</h4>
          <p>Sword of Rome</p>
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
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
              harum odio nulla repellendus dolores, architecto autem sapiente,
              nesciunt aliquid quidem ducimus minima accusantium hic! Eius enim
              dicta ipsum! Eius, similique!
            </p>
          </div>
          <div className={styles.projects}>
            <h3>information</h3>
            <div className={styles.info_data}>
              <div className={styles.data}>
                <h4>Email</h4>
                <p>FlaviusBelisarius@hotmail.com</p>
              </div>
              <div className={styles.data}>
                <h4>Phone</h4>
                <p>0100019190191910</p>
              </div>
              <div className={styles.data}>
                <h4>Location</h4>
                <p>Nigde</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProfile;
