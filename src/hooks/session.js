import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../state/session/actions';
import * as sessionSelectors from '../state/session/selectors';

const useSession = () => {
  const dispatch = useDispatch();

  const login = useCallback(() => {
    dispatch(sessionActions.createRequest());
  }, [dispatch]);

  const logout = useCallback(() => {
    dispatch(sessionActions.destroyRequest());
  }, [dispatch]);

  const isLoggedIn = useSelector(sessionSelectors.isLoggedIn);
  const isAdmin = useSelector(sessionSelectors.isAdmin);

  return {
    isLoggedIn,
    isAdmin,
    login,
    logout,
  };
};

export default useSession;
