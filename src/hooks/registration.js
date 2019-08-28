import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import * as registrationActions from '../state/registration/actions';

const useRegistration = () => {
  const dispatch = useDispatch();

  const signUp = useCallback((email, password) => {
    dispatch(registrationActions.createAccountRequest(email, password));
  }, [dispatch]);

  return {
    signUp,
  };
};

export default useRegistration;
