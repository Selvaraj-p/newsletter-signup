import { useState } from 'react';
import '../styles/styles.css';

export default function SignupForm({ email, setEmail, handleSubmit }) {
  const [error, setError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (emailRegex.test(email)) {
      setError(false);
      handleSubmit();
    } else {
      setError(true);
    }
  };

  return (
    <div className="sign-up-form">
      <h1 className="form-heading">Stay updated!</h1>
      <p className="form-description">
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <ul className="feature-list">
        <li>Product discovery and building what matters</li>
        <li>Measuring to ensure updates are a success</li>
        <li>And much more!</li>
      </ul>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={error ? 'input error' : 'input'}
          placeholder="email@company.com"
        />
        {error && <em className="error-message">Valid email required.</em>}
        <button type="submit" className="sub-btn" onClick={() => window.location.href = 'success.html'}>
          Subscribe to monthly newsletter
        </button>
      </form>
      <footer className="footer">
Challenge by <a href="https://crio.do">Crio</a>.Coded by <a href="https://www.github.com/selvaraj-p">selvaraj-p</a>
      </footer>
    </div>
  );
}
