import React, { useEffect } from "react";
import styles from "../index.module.css";
function Login() {
  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div className={styles.header}>
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
          <i className="bx bx-user"></i>
        </div>
        <div className="input-field">
          <input
            type="password"
            className="input"
            placeholder="Password"
            required
          />
          <i className="bx bx-lock-alt"></i>
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

export default Login;
