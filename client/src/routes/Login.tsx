import React, { useEffect, useState } from "react";
import styles from "../styles/login.module.css";
import fetcher from "../../library/fetcherLogin";
import { useNavigate } from "react-router-dom";

function Login() {
  useEffect(() => {
    document.title = "Login";
  }, []);
  const navigate = useNavigate();
  const [error, setError] = useState("");
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
  const handleSubmit = async () => {
    const response = await fetcher(formData);
    if (response.message) {
      return setError(response.message);
    }
    setError("");
    navigate("/");
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
          <img src="../logos/user.svg" className={styles.icon} />
          
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
          <img src="../logos/lock.svg" className={styles.icon} />
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
          <div className={styles.right}>
            <label>
              <a href="/signup">Dont you have an account?</a>
            </label>
          </div>
        </div>
        {error ? (
          <div className={styles.error}>
            <img src="../logos/error.svg" className={styles.error_icon} />
            <div>{error}</div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Login;
