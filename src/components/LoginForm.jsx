import axios from 'axios';
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

function LoginForm() {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(form);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = { ...form, [name]: value };
    setForm(newData);
  };

  return (
    <div>
      <div className="loginFormMainDiv">
        <h1>SIGN IN</h1>
        <form>
          <label htmlFor="name" />
          <h2>USERNAME</h2>
          <div>
            <input
              id="name"
              type="text"
              placeholder="Username"
              name="username"
              value={form.username}
              onChange={handleChange}
            />
          </div>
          <label htmlFor="password" />
          <h2>PASSWORD</h2>
          <div>
            <input
              id="password"
              type="password"
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <button onClick={handleSubmit}>SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
