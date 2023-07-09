async function fetcher(data: any) {
  const username = data.username;
  const password = data.password;
  if (username === "" || password === "")
    return { message: "You cant have empty lines." };

  const response = await fetch("http://localhost:8000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  const reply = await response.json();
  console.log(reply);
  return reply;
}
export default fetcher;
