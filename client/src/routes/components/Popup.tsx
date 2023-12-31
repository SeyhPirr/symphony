import React from "react";
import styles from "../../styles/profilePopup.module.css";

function Popup(props: any) {
  return props.trigger ? (
    <div className={styles.popup}>
      <div className={styles.inner}>
        <button
          className={styles.close}
          onClick={() => {
            props.setTrigger(false);
          }}
        >
          <img src="../../../logos/x.svg" alt="" />
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
