"use client";

import { useState } from "react";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../graphql/mutations";

export default function Register() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "user" });
  const [register] = useMutation(REGISTER_USER);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await register({ variables: formData });
    alert("Registered successfully!");
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
