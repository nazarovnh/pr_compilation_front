import { useState } from 'react';

import { TextField } from '@mui/material';

import './EmailInput.scss';

interface EmailInputProps {
  className?: string;
  email: string;
  error: string;
  setEmail: (event: string) => void;
  setError: (event: string) => void;
}

const EmailInput = ({ className = '', email, error, setEmail, setError }: EmailInputProps) => {
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setError('Invalid email address');
    } else {
      setError('');
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = event.target;
    setEmail(value);
    if (isEmailTouched) {
      validateEmail(value);
    }
  };
  const handleEmailFocus = () => {
    setError('');
    setIsEmailTouched(false);
  };

  const handleEmailBlur = () => {
    setIsEmailTouched(true);
    validateEmail(email);
  };

  return (
    <TextField
      className={`email-input ${className}`}
      label="Email"
      type="email"
      autoComplete="current-password"
      variant="standard"
      required
      value={email}
      onChange={handleEmailChange}
      onBlur={handleEmailBlur}
      onFocus={handleEmailFocus}
      error={!!error}
      helperText={isEmailTouched ? error : ''}
    />
  );
};

export default EmailInput;
