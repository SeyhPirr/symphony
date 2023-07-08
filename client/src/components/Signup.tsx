import React, { useEffect, useState } from "react";
import styles from "../styles/signup.module.css";
import fetcher from "../../library/fetcher";

function Signup() {
  useEffect(() => {
    document.title = "Signup";
  }, []);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordAgain: "",
    email: "",
  });
  const handleChange = (event: any) => {
    console.log("event: ", event.target.name);
    const fieldName = event.target.name;
    setFormData((existingValues) => ({
      ...existingValues,

      [fieldName]: event.target.value,
    }));
  };
  const handleSubmit = () => {
    fetcher(formData);
  };
  //**********************************************************************
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div className="top-header">
          <span>Not part of the Symphony?</span>

          <header>Signup to Symphony</header>
        </div>
        <div className="input-field">
          <input
            name="username"
            type="text"
            className={styles.input}
            placeholder="Username"
            onChange={handleChange}
            value={formData.username}
            required
          />
          <img src="../logos/user.svg" className={styles.icon} />
        </div>
        <div className="input-field">
          <input
            name="password"
            type="password"
            className={styles.input}
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
            required
          />
          <img src="../logos/lock.svg" className={styles.icon} />
        </div>
        <div className="input-field">
          <input
            name="passwordAgain"
            type="password"
            className={styles.input}
            placeholder="Password again"
            onChange={handleChange}
            value={formData.passwordAgain}
            required
          />
          <img src="../logos/lock.svg" className={styles.icon} />
        </div>
        <div className="input-field">
          <input
            name="email"
            type="email"
            className={styles.input}
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <img src="../logos/envelope.svg" className={styles.icon} />
        </div>
        <div className="input-field">
          <input
            type="submit"
            className={styles.submit}
            value="Signup"
            onClick={handleSubmit}
          />
        </div>

        <div className={styles.bottom}>
          <div className={styles.right}>
            <label>
              <a href="/login">Do you already have an account?</a>
            </label>
          </div>
          <div className={styles.left}>
            <label>
              <a href="#">Forgot password?</a>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
