import React, { useState } from 'react';
import { getAuth, signInWithPhoneNumber } from 'firebase/auth';

function PhoneAuthForm() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState(null);

  const auth = getAuth();
  auth.languageCode = 'en';

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithPhoneNumber(auth, phoneNumber)
      .then((confirmationResult) => {
        // Show the code verification form.
        setError(null);
      })
      .catch((error) => {
        // An error occurred. Show an error message to the user.
        setError(error.message);
      });
  };

  const handleVerification = (e) => {
    e.preventDefault();
    auth
      .confirm(code)
      .then((result) => {
        // The user has been authenticated.
      })
      .catch((error) => {
        // An error occurred. Show an error message to the user.
        setError(error.message);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Phone number:
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </label>
      <button type="submit">Send verification code</button>
      {error && <p>{error}</p>}
      {auth.confirmationResult && (
        <form onSubmit={handleVerification}>
          <label>
            Verification code:
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </label>
          <button type="submit">Verify code</button>
          {error && <p>{error}</p>}
        </form>
      )}
    </form>
  );
}
