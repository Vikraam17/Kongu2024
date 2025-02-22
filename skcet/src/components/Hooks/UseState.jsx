import React, { useState } from "react";

const UseState = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name : </label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        
        <label>Email : </label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />

        <label>Password : </label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />

        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default UseState;
