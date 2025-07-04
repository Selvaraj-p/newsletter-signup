
import React, { useState } from 'react';
import '../styles/styles.css'; // Ensure this file contains all required class styles

function SignupForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (regex.test(email.trim())) {
      setError(false);
      localStorage.setItem('submittedEmail', email.trim());
      window.location.href = 'success.html';
    } else {
      setError(true);
    }
  };

  return (
    <div className="sign-up-form">
      <h1>Stay updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul>
        <li>Product discovery and building what matters</li>
        <li>Measuring to ensure updates are a success</li>
        <li>And much more!</li>
      </ul>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          id="email"
          className={error ? 'error' : ''}
          placeholder="email@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <em>Valid email required.</em>}
        <button type="submit" className="sub-btn">Subscribe to monthly newsletter</button>
      </form>

      <footer className="footer">
        © 2025 <a href="https://crio.do">Crio</a>
      </footer>
    </div>
  );
}

export default SignupForm;
