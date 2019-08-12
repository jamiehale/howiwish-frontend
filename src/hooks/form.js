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
    case 'submit': {
      return {
        ...state,
        submitted: true,
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

const initialState = (formConfig, initialValues) => ({
  submitted: false,
  fields: R.keys(formConfig.fields).reduce((fields, name) => ({
    ...fields,
    [name]: {
      value: initialValues[name] || '',
    },
  }), {}),
  fieldNames: R.keys(formConfig.fields).reduce((names, name) => ([
    ...names,
    name,
  ]), []),
});

const valueFromState = ({ fields, fieldNames }) => fieldNames.reduce((values, name) => ({
  ...values,
  [name]: fields[name].value,
}), {});

const useForm = (formConfig, initialValues = {}) => {
  const [state, dispatch] = useReducer(loggingReducer(reducer), initialState(formConfig, initialValues));

  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch({
      type: 'submit'
    });

    if (isFormValid()) {
      formConfig.onSubmit(valueFromState(state));
    }
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

  const isFormValid = () => state.fieldNames.reduce((isValid, fieldName) => isValid && isFieldValid(fieldName), true);

  const isFieldValid = name => validateField(name);

  const runAllValidatorsOnField = (name) => {
    const field = formConfig.fields[name];
    const validators = R.keys(field || {}).map(validatorName => allValidators[validatorName](field[validatorName]));
    return validators.reduce((error, validator) => error || validator(state.fields[name].value), undefined);
  }

  const validateField = (name) => {
    const error = runAllValidatorsOnField(name);
    if (error) {
      dispatch({
        type: 'setError',
        payload: {
          name,
          error,
        },
      });

      return false;
    }
    dispatch({
      type: 'clearError',
      payload: {
        name,
      },
    });

    return true;
  };

  const onBlur = name => (e) => {
    if (state.submitted) {
      e.preventDefault();
      validateField(name);
    }
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
