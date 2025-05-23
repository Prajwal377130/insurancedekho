import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './LoginSignup.css';

function LoginSignUp() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = `http://localhost:4000/api/auth/${isLogin ? 'login' : 'signup'}/${formData.role}`;
    const payload = isLogin
      ? { email: formData.email, password: formData.password }
      : formData;

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (res.ok) {
     if (isLogin) {
  login({ ...data.user, token: data.token });
  if (data.user.role === 'admin') {
    navigate('/admin');
  } else {
    navigate('/');
  }
}
 else {
        alert('Signup successful! Please login.');
        setIsLogin(true);
      }
    } else {
      alert(data.message || 'Authentication failed');
    }
  };

  return (
    <div className="modal-container">
      <div className="auth-modal">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && formData.role === 'user' && (
            <input
              type="text"
              name="panNumber"
              placeholder="Pan Number"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <div className="role-selection">
            <label>
              <input
                type="radio"
                name="role"
                value="user"
                checked={formData.role === 'user'}
                onChange={handleChange}
              /> User
            </label>

            <label>
              <input
                type="radio"
                name="role"
                value="admin"
                checked={formData.role === 'admin'}
                onChange={handleChange}
              /> Admin
            </label>

          </div>
          <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
        </form>
        <p>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span className="switch-link" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Sign up' : 'Login'}
          </span>
        </p>
        <p className="back-home" onClick={() => navigate('/')}>← Back to Home</p>
      </div>
    </div>
  );
}

export default LoginSignUp;
