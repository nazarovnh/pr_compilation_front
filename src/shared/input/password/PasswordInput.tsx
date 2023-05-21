import { useState } from 'react';
import { TextField } from '@mui/material';

import './PasswordInput.scss';

const MIN_LENGHT = 3;
interface PasswordInputProps {
  className?: string;
  password: string;
  error: string;
  setPassword: (event: string) => void;
  setError: (event: string) => void;
}

const PasswordInput = ({
  className = '',
  password,
  error,
  setPassword,
  setError,
}: PasswordInputProps) => {
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const validatePassword = (value: string) => {
    if (value.length < MIN_LENGHT) {
      setError('Password must be more than 8 symbols');
    } else {
      setError('');
    }
  };

  const handlePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = event.target;
    setPassword(value);
    if (isPasswordTouched) {
      validatePassword(value);
    }
  };

  const handlePasswordFocus = () => {
    setError('');
    setIsPasswordTouched(false);
  };

  const handlePasswordBlur = () => {
    setIsPasswordTouched(true);
    validatePassword(password);
  };

  return (
    <TextField
      className={`password-input ${className}`}
      label="Password"
      type="password"
      autoComplete="current-password"
      variant="standard"
      required
      value={password}
      onChange={handlePasswordChange}
      onBlur={handlePasswordBlur}
      onFocus={handlePasswordFocus}
      error={!!error}
      helperText={isPasswordTouched ? error : ''}
    />
  );
};

export default PasswordInput;
