import { useState } from 'react';
import { TextField } from '@mui/material';

interface PasswordInputProps {
  password: string;
  error: string;
  setPassword: (event: string) => void;
  setError: (event: string) => void;
}

const PasswordInput = ({ password, error, setPassword, setError }: PasswordInputProps) => {
  const [isPasswordTouched, setIsPasswordTouched] = useState(false);

  const validatePassword = (value: string) => {
    if (value.length < 8) {
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
