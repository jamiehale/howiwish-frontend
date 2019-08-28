import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../state/session/actions';
import * as sessionSelectors from '../state/session/selectors';

const useSession = () => {
  const dispatch = useDispatch();

  const signIn = useCallback(() => {
    dispatch(sessionActions.createRequest());
  }, [dispatch]);

  const signOut = useCallback(() => {
    dispatch(sessionActions.destroyRequest());
  }, [dispatch]);

  const isSignedIn = useSelector(sessionSelectors.isSignedIn);

  return {
    isSignedIn,
    signIn,
    signOut,
  };
};

export default useSession;
