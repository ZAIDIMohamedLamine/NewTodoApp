
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAccessToken, setUser } from '../../features/userSlice';

function LoginForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      const data = {
        username,
        password,
      };
      const res = await axios.post("http://localhost:3001/api/login", data)
      dispatch(setAccessToken(res.data.accessToken));
      dispatch(setUser(res.data.user));
      navigate("/todos");

      
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='username'>
            Username:
          </label>
            <input id='username' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <br />
          <label htmlFor='password'>
            Password:
          </label>
            <input id='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

export default LoginForm;
