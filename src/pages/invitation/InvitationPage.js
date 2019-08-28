import React from 'react';
import { withRouter } from 'react-router';
import useInvitationRedirector from '../../hooks/invitation-redirector';

const InvitationPage = ({
  match,
}) => {
  useInvitationRedirector(match.params.id);

  return (
    <>
      <h2>Invitation</h2>
      <p>Checking your invitation...</p>
    </>
  );
};

export default withRouter(InvitationPage);
