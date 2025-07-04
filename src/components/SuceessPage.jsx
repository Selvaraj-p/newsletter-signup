export default function SuccessPage({ email }) {
  return (
    <div className="sign-up-form p-6 bg-white rounded-lg shadow-lg max-w-md text-center">
      <img src="/images/icon-success.svg" alt="Success" className="mx-auto mb-4" />
      <h1 className="thanks-for-sub text-2xl font-bold mb-2">Thanks for Subscribing!</h1>
      <p className="success-text text-sm text-gray-600 mb-4">{email}</p>
      <button
        className="dismiss-btn bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => window.location.href = 'index.html'}
      >
        Dismiss message
      </button>
    </div>
  );
}
