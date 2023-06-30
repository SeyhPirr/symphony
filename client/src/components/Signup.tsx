import React from "react";
import styles from "../index.module.css";

function Signup() {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div className="top-header">
          <span>Have an account?</span>

          <header>Login to Symphony</header>
        </div>
        <div className="input-field">
          <input
            type="text"
            className={styles.input}
            placeholder="Username"
            required
          />
          <img src="../logos/user.svg" className="input_icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            className={styles.input}
            placeholder="Password"
            required
          />
          <img src="../logos/lock.svg" />
        </div>
        <div className="input-field">
          <input
            type="password"
            className={styles.input}
            placeholder="Password again"
            required
          />
          <img src="../logos/lock.svg" />
        </div>
        <div className="input-field">
          <input
            type="email"
            className={styles.input}
            placeholder="Email"
            required
          />
          <img src="../logos/envelope.png" />
        </div>
        <div className="input-field">
          <input type="submit" className="submit" value="Login" />
        </div>

        <div className="bottom">
          <div className="left">
            <input type="checkbox" id="check" />
            <label htmlFor="check">Remember me</label>
          </div>
          <div className="right">
            <label>
              <a href="#">Dont you have an account?</a>
            </label>
          </div>
        </div>
        <div className="last">
          <label>
            <a href="#">Forgot password?</a>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Signup;
