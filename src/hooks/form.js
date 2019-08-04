import { useReducer } from 'react';
import * as R from 'ramda';

const isRequired = message => (value) => {
  if (R.isEmpty(value)) {
    return message;
  }
  return undefined;
};

const matchesRegex = ({
  pattern,
  message,
}) => (value) => {
  if (value && !value.match(pattern)) {
    return message;
  }
  return undefined;
};

const allValidators = {
  isRequired,
  matchesRegex,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'update': {
      const { name, value } = action.payload;
      return {
        ...state,
        fields: {
          ...state.fields,
          [name]: {
            ...state.fields[name],
            value,
          },
        },
      };
    }
    case 'setError': {
      const { name, error } = action.payload;
      return {
        ...state,
        fields: {
          ...state.fields,
          [name]: {
            ...state.fields[name],
            error,
          },
        },
      };
    }
    case 'clearError': {
      const { name } = action.payload;
      return {
        ...state,
        fields: {
          ...state.fields,
          [name]: {
            ...state.fields[name],
            error: undefined,
          },
        },
      };
    }
    default: {
      return state;
    }
  }
};

const loggingReducer = reducer => (state, action) => {
  console.log('state before', state);
  console.log('action', action);
  const newState = reducer(state, action);
  console.log('state after', newState);
  return newState;
};

const initialState = (formConfig) => ({
  submitted: false,
  fields: R.keys(formConfig.fields).reduce((fields, name) => ({
    ...fields,
    [name]: {
      value: '',
    },
  }), {}),
  fieldNames: R.keys(formConfig.fields).reduce((names, name) => ([
    ...names,
    name,
  ]), []),
});

const useForm = (formConfig) => {
  const [state, dispatch] = useReducer(loggingReducer(reducer), initialState(formConfig));

  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    formConfig.onSubmit(state.fieldNames.reduce((values, name) => ({
      ...values,
      [name]: state.fields[name].value,
    }), {}));
  };

  const onChange = name => (e) => {
    e.preventDefault();
    dispatch({
      type: 'update',
      payload: {
        name,
        value: e.target.value,
      },
    });
  };

  const validate = (name) => {
    const field = formConfig.fields[name];
    const validators = R.keys(field || {}).map(validatorName => allValidators[validatorName](field[validatorName]));
    const error = validators.reduce((error, validator) => error || validator(state.fields[name].value), undefined);
    if (error) {
      dispatch({
        type: 'setError',
        payload: {
          name,
          error,
        },
      });
    } else {
      dispatch({
        type: 'clearError',
        payload: {
          name,
        },
      });
    }
  };

  const onBlur = name => (e) => {
    e.preventDefault();
    validate(name);
  };

  const propsForForm = () => ({
    onSubmit,
  });

  const propsForField = (name) => ({
    id: name,
    name,
    value: state.fields[name].value,
    onChange: onChange(name),
    onBlur: onBlur(name),
  });

  const errorForField = name => state.fields[name].error;

  return {
    propsForForm,
    propsForField,
    errorForField,
  };
};

export default useForm;
