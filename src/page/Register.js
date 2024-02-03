import { async } from "@firebase/util";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../config/firebase";

export default function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  // const [registerEmail,setRegisterEmail]=useState('')
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log("user", user);
    } catch (err) {
      console.log(err.message);
    }
  };
  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div>
      <h1>Register</h1>
      {/* <form action="/register" method="post"> */}
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        name="username"
        id="username"
        onChange={(e) => setRegisterEmail(e.target.value)}
      />
      <br />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => setRegisterPassword(e.target.value)}
      />
      <br />
      <button onClick={register}>Submit</button>
      <button onClick={logout}>Logout</button>
      {/* </form> */}
    </div>
  );
}
