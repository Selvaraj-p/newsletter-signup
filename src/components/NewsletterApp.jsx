import { useState } from 'react';
import SignupForm from './SignupForm';
import SuccessPage from './SuceessPage';

export default function NewsletterApp() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="main font-['Roboto',sans-serif] min-h-screen flex items-center justify-center bg-gray-100">
      {submitted ? (
        <SuccessPage email={email} />
      ) : (
        <SignupForm email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
      )}
    </div>
  );
}
