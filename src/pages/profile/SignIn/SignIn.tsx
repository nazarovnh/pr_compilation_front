import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Button, Container, Link, Typography } from '@mui/material';

import { useLazySignInQuery } from '../../../features/auth/api/authApi';
import { changeIsAuth } from '../../../features/auth/slice/authSlice';
import Card from '../../../shared/card/Card';
import PasswordInput from '../../../shared/input/password/PasswordInput';
import EmailInput from '../../../shared/input/email/EmailInput';

import './SignIn.scss';

const SignIn: React.FC = () => {
  const { t } = useTranslation('t', { keyPrefix: 'signIn' });
  const dispatch = useDispatch();
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
      .then(() => {
        // localStorage.setItem('accessToken', response.accessToken);
        dispatch(changeIsAuth(true));
      });
  };

  return (
    <div className="signin">
      <Card className="signin_card">
        <Container maxWidth="xs">
          <Typography variant="h3">{t('header.title')}</Typography>
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
            <Link className="form-container__link" href="/signup" variant="body2">
              {t('helpText.notRegister')}
            </Link>
          </form>
        </Container>
      </Card>
    </div>
  );
};

export default SignIn;
