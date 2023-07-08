async function fetcher(data: any) {
  const username = data.username;
  const password = data.password;
  const email = data.email;
  const passwordAgain = data.passwordAgain;
  if (
    username === "" ||
    password === "" ||
    passwordAgain === "" ||
    email === ""
  )
    return console.log("You can`t have empty lines.");
  if (password !== passwordAgain)
    return console.log("Passwords are not matching.");
  const response = await fetch("http://localhost:8000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password, email }),
  });
  const reply = await response.json();
  console.log(reply);
}
export default fetcher;
