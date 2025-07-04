import React from 'react';
import '../styles/styles.css'; // Import your CSS file

export default function Success({ email, onDismiss }) {
  return (
    <div className="sign-up-form">
      <img src="/images/icon-success.svg" alt="Success Icon" />

      <h1 className="thanks-for-sub">Thanks for Subscribing!</h1>

      <p className="success-text">
        A confirmation email has been sent to <strong>{email}</strong>.
        Please open it and click the button inside to confirm your subscription.
      </p>

      <button
        className="dismiss-btn"
        onClick={() => (window.location.href = 'success.html')}
      >
        Dismiss message
      </button>
    </div>
  );
}
