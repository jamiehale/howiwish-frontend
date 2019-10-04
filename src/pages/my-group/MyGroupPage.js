import React, { useState } from 'react';
import { withRouter } from 'react-router';
import useMyGroup from '../../hooks/my-group';
import FormattedGroup from './FormattedGroup';
import Form from '../../components/Form';
import Button from '../../components/Button';
import PrimaryButton from '../../components/PrimaryButton';
import useForm from '../../hooks/form';
import ButtonRow from '../../components/ButtonRow';

const formConfig = onInvite => ({
  submit: (values) => {
    onInvite(values);
  },
});

const InviteForm = ({
  onInvite,
  onClose,
}) => {
  const {
    propsForForm,
  } = useForm(formConfig(onInvite));

  return (
    <Form
      {...propsForForm()}
    >
      <ButtonRow>
        <Button onClick={onClose}>Cancel</Button>
        <PrimaryButton>Send</PrimaryButton>
      </ButtonRow>
    </Form>
  )
};

const ToggledComponent = ({
  text,
  render,
}) => {
  const [isOpen, setOpen] = useState(false);

  return isOpen ?
    render(() => { setOpen(false); })
  : (
    <Button
      onClick={() => { setOpen(true); }}
    >
      {text}
    </Button>
  );
};

const MyGroupPage = ({
  match,
}) => {
  const { group } = useMyGroup(match.params.id);

  const handleInvite = (emails) => {
    console.log('invited:', emails);
  };

  return (
    <>
      {group && (
        <>
          <FormattedGroup
            group={group}
          />
          <ToggledComponent
            text="Invite new members!"
            render={(onClose) => (
              <InviteForm
                onInvite={handleInvite}
                onClose={onClose}
              />
            )}
          />
        </>
      )}
    </>
  );
};

export default withRouter(MyGroupPage);
