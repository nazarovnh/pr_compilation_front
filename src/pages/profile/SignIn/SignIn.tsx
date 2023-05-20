import { useState } from 'react';

import { Button, Container, Typography } from '@mui/material';

import Card from '../../../shared/card/Card';
import PasswordInput from '../../../shared/input/PasswordInput';
import EmailInput from '../../../shared/input/EmailInput';

import './SignIn.scss';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const isValid = () => {
    return !(errorEmail || errorPassword);
  };
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isValid()) {
      console.log('Email:', email);
      console.log('Password:', password);
    }
  };

  return (
    <div className="signin">
      <Card>
        <Container maxWidth="xs">
          <Typography variant="h3">Вход</Typography>
          <form className="form-container" onSubmit={handleFormSubmit}>
            <EmailInput
              email={email}
              error={errorEmail}
              setEmail={setEmail}
              setError={setErrorEmail}
            />
            <PasswordInput
              password={password}
              error={errorPassword}
              setPassword={setPassword}
              setError={setErrorPassword}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={!email || !password || !isValid()}
            >
              Sign In
            </Button>
          </form>
        </Container>
      </Card>
    </div>
  );
};

export default SignIn;
