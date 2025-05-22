// src/components/LoginSignUpModal.jsx
import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const API_URL = 'http://localhost:5000/api'; // Update if needed

const LoginSignUpModal = ({ closeModal }) => {
  const { login } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', panNumber: '', password: '' });
  const [message, setMessage] = useState('');

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({ name: '', email: '', panNumber: '', password: '' });
    setMessage('');
  };

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const endpoint = isLogin ? '/user/login' : '/user/register';
      const res = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      if (isLogin) {
        login({ token: data.token, name: data.name || '', email: formData.email });
        closeModal();
      } else {
        setMessage('Registration successful. You can now log in.');
        setIsLogin(true);
      }
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{isLogin ? 'Login' : 'Register'}</h2>
        {message && <p style={{ color: 'red' }}>{message}</p>}
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input name="name" placeholder="Name" onChange={handleChange} required />
              <input name="panNumber" placeholder="PAN Number" onChange={handleChange} required />
            </>
          )}
          <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
        </form>
        <p onClick={toggleMode} style={{ cursor: 'pointer', color: 'blue' }}>
          {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
        </p>
        <button onClick={closeModal} style={{ marginTop: '10px' }}>Close</button>
      </div>
    </div>
  );
};

export default LoginSignUpModal;
