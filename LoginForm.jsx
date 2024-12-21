import React, { useState } from 'react';

const LoginForm = ({ setShowLogin }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Here you would typically verify against your users in db.json
      const response = await fetch('http://localhost:3001/users');
      const users = await response.json();
      
      const user = users.find(u => 
        u.email === loginData.email && u.password === loginData.password
      );

      if (user) {
        alert('Login successful!');
        // Add your login logic here (e.g., setting auth state, redirecting)
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error logging in');
    }
  };

  return (
    <section className="login-section">
      <button 
        className="back-arrow"
        onClick={() => setShowLogin(false)}
      >
        ←
      </button>
      <div className="login-container">
        <h2 className="login-title">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="form-button">
            Login
          </button>

          <div className="social-login-divider">
            or login with
          </div>

          <div className="social-buttons">
            <button type="button" className="social-btn">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/800px-Facebook_logo_%28square%29.png" alt="Facebook" />
              Facebook
            </button>
            <button type="button" className="social-btn">
              <img src="https://static.vecteezy.com/system/resources/previews/020/964/377/non_2x/gmail-mail-icon-for-web-design-free-png.png" alt="Google" />
              Google
            </button>
            <button type="button" className="social-btn">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png" alt="Microsoft" />
              Microsoft
            </button>
          </div>

          <div className="login-footer">
            <p>Don't have an account? <a href="#contact-form">Sign up</a></p>
            <a href="#forgot-password" className="forgot-password">Forgot Password?</a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
