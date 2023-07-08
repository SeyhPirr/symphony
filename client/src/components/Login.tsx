import React, { useEffect, useState } from "react";
import styles from "../styles/login.module.css";
import fetcher from "../../library/fetcher";

function Login() {
  useEffect(() => {
    document.title = "Login";
  }, []);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
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
    console.log("hey there");
    fetcher(formData);
  };
  //********************************
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span>Have an account?</span>

          <header>Login to Symphony</header>
        </div>
        <div className="input-field">
          <input
            name="username"
            type="text"
            className={styles.input}
            onChange={handleChange}
            placeholder="Username"
            required
          />
          <i className="bx bx-user"></i>
        </div>
        <div className="input-field">
          <input
            name="password"
            type="password"
            className={styles.input}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <i className="bx bx-lock-alt"></i>
        </div>
        <div className="input-field">
          <input
            type="submit"
            className={styles.submit}
            value="Login"
            onClick={handleSubmit}
          />
        </div>

        <div className={styles.bottom}>
          <div className={styles.left}>
            <input type="checkbox" id="check" />
            <label htmlFor="check"> Remember me</label>
          </div>
          <div className={styles.right}>
            <label>
              <a href="/signup">Dont you have an account?</a>
            </label>
          </div>
        </div>
        <div className={styles.last}>
          <label>
            <a href="#">Forgot password?</a>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Login;
