import React, { useState } from "react";
import "./Login_page.css";

const LoginPage = () => {
  const [logdata, setlogData] = useState({
    email: "",
    password: "",
  });

  const [records, setRecords] = useState([]);
  const inputData = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setlogData({ ...logdata, name, value });
  };

  const handleSubmit = (handle) => {
    handle.preventDefault();

    const newUser = { ...logdata, id: new Date().getTime().toString() };
    setRecords([...records, newUser]);
    setlogData({ email: "", password: "" });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <div className="login_form">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email Id"
            value={logdata.email}
            onChange={inputData}
          />
        </div>

        <div className="login_form">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={logdata.password}
            onChange={inputData}
          />
        </div>
        <div>
          <button type="submit" className="btn">
            Log In
          </button>
        </div>
      </form>
      <div>
        <form>
          {records.map((curElement, id) => {
            const { email, password } = curElement;
            return (
              <div className="login_form" key={id}>
                <p> {email} </p>

                <p> {password} </p>
              </div>
            );
          })}
        </form>
      </div>
    </>
  );
};

export default LoginPage;
