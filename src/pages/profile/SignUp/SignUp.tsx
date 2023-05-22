import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Container, Link, Typography } from '@mui/material';

import Card from '../../../shared/card/Card';
import PasswordInput from '../../../shared/input/password/PasswordInput';
import EmailInput from '../../../shared/input/email/EmailInput';

import './SignUp.scss';

const SignUp = () => {
  const { t } = useTranslation('t', { keyPrefix: 'signUp' });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const isValid = () => {
    return !(errorEmail || errorPassword);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="signup">
      <Card className="signup_card">
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
            <Link className="form-container__link" href="/signin" variant="body2">
              {t('helpText.register')}
            </Link>
          </form>
        </Container>
      </Card>
    </div>
  );
};

export default SignUp;
