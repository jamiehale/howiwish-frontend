import React from 'react';
import List from '../../components/List';
import ListItem from '../../components/ListItem';
import Form from '../../components/Form';
import Label from '../../components/Label';
import FieldName from '../../components/FieldName';
import TextArea from '../../components/TextArea';
import SubmitButton from '../../components/SubmitButton';
import useForm from '../../hooks/form';
import { paragraphethize } from '../../utils/format';

const CommentList = ({
  comments
}) => {
  const commentItems = comments.map(comment => (
    <ListItem
      key={comment.id}
    >
      {paragraphethize(comment.body)}
    </ListItem>
  ));

  return (
    <List>
      {commentItems}
    </List>
  );
};

const formConfig = (onNewComment) => ({
  onSubmit: (values) => {
    onNewComment({
      body: values.body
    });
  },
  fields: {
    body: {}
  },
});

const NewCommentForm = ({
  onNewComment,
}) => {
  const {
    propsForForm,
    propsForField,
    errorForField,
  } = useForm(formConfig(onNewComment));

  return (
    <Form
      {...propsForForm()}
    >
      <div>
        <Label htmlFor="body">
          <FieldName>Comment:</FieldName>
          <TextArea
            {...propsForField('body')}
          />
          {errorForField('body') && (
            <p>{errorForField('body')}</p>
          )}
        </Label>
      </div>
      <SubmitButton>Send</SubmitButton>
    </Form>
  );
};

const FormattedItem = ({
  item,
}) => {
  const descriptionText = paragraphethize(item.description);

  const handleNewComment = (comment) => {
    console.log(comment);
  };

  return (
    <>
      <h1>{item.name}</h1>
      {descriptionText}
      <CommentList
        comments={item.comments}
      />
      <NewCommentForm
        onNewComment={handleNewComment}
      />
    </>
  );
};

export default FormattedItem;
