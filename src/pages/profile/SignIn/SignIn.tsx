import { useState } from 'react';

import { Button, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { useLazySignInQuery } from '../../../features/auth/api/authApi';
import Card from '../../../shared/card/Card';
import PasswordInput from '../../../shared/input/password/PasswordInput';
import EmailInput from '../../../shared/input/email/EmailInput';

import './SignIn.scss';

const SignIn: React.FC = () => {
  const { t } = useTranslation('t', { keyPrefix: 'signIn' });
  const [signIn] = useLazySignInQuery();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const isValid = () => {
    return !(errorEmail || errorPassword);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    signIn({ email: email, password: password.trim() })
      .unwrap()
      .then((response) => console.log(response));

    if (isValid()) {
      console.log('Email:', email);
      console.log('Password:', password);
    }
  };

  return (
    <div className="signin">
      <Card className="signin_card">
        <Container maxWidth="xs">
          <Typography variant="h3">Вход</Typography>
          <form className="form-container" onSubmit={handleFormSubmit}>
            <EmailInput
              className="form-container__email-input"
              email={email}
              error={errorEmail}
              setEmail={setEmail}
              setError={setErrorEmail}
            />
            <PasswordInput
              className="form-container__password-input"
              password={password}
              error={errorPassword}
              setPassword={setPassword}
              setError={setErrorPassword}
            />
            <Button
              className="form-container__button"
              type="submit"
              variant="contained"
              color="primary"
              disabled={!email || !password || !isValid()}
            >
              <span>{t('button.submit')}</span>
            </Button>
          </form>
        </Container>
      </Card>
    </div>
  );
};

export default SignIn;
