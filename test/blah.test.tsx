import * as React from 'react';
import ReactFormControl from '../src';

interface InitialValues {
  name: string;
  email: string;
}

const intiialValue = {
  name: '',
  email: '',
};

const handleSubmit = (values: InitialValues) => {
  console.log(values);
};

const formFields = [
  {
    control: 'input',
    rest: {
      name: 'name',
      label: 'Name',
    },
  },
  {
    control: 'input',
    rest: {
      name: 'email',
      label: 'Email',
      type: 'email',
    },
  },
];

const App = () => {
  return (
    <ReactFormControl
      formInitialData={{
        intialValues: intiialValue,
        submit: handleSubmit,
      }}
      formConfig={{
        formFields: formFields,
        button: <button>Send</button>,
      }}
    />
  );
};
