import { useState } from "react";
import { loginUser } from "../fetching";
import { useNavigate } from "react-router-dom";

export default function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    const register = await loginUser(username, password);
    console.log(register.token);
    setToken(register.token);
    // console.log(register);
    setUsername("");
    setPassword("");
    // nav("/songs");
  };
  return (
    <>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          id="username"
          autoFocus
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
