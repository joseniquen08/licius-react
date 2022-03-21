import { useState } from 'react';

export const useErrorsLogin = () => {
  const [notEmail, setNotEmail] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorMinLenPassword, setErrorMinLenPassword] = useState(false);
  const [errorInvalidEmail, setErrorInvalidEmail] = useState(false);
}