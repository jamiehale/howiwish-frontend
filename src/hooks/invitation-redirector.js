import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as invitationActions from '../state/invitation/actions';

const useInvitationRedirector = (invitationId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(invitationActions.loadRequest(invitationId));
  }, [invitationId]);
};

export default useInvitationRedirector;
