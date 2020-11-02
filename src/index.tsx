import * as React from 'react';
import { Form, Formik } from 'formik';
import Formik_Control from './Formik_Control';
import './Form_Comp.scss';
import { FormFieds } from './FormInterfaces';

interface FormInitialData {
  intialValues?: any;
  validationSchema?: any;
  submit?: Function;
}

interface FormConfig {
  formFields?: FormFieds[];
  button?: any;
  reset?: boolean;
  form_class?: string;
  states?: any;
}

interface FormDataProps {
  formInitialData: FormInitialData;
  formConfig: FormConfig;
  ownComponent?: boolean;
}

const ReactControlForm = ({
  formInitialData,
  formConfig,
  ownComponent,
}: FormDataProps) => {
  const [show, setShow] = React.useState<boolean>(false);
  const tools = {
    show,
    setShow,
  };

  const states = formConfig.states;
  const handleSubmit = formInitialData.submit
    ? formInitialData.submit
    : console.log;

  const formFields = formConfig.formFields ? formConfig.formFields : [];

  return (
    <Formik
      initialValues={formInitialData.intialValues}
      validationSchema={formInitialData.validationSchema}
      onSubmit={async (values: any, { resetForm }: any) => {
        if (ownComponent) {
          const result = await handleSubmit(values, states);
          if (result) {
            resetForm();
          }
        } else {
          await handleSubmit(values, states);
          resetForm();
        }
      }}
    >
      {(formik: any) => {
        return (
          <Form className={formConfig.form_class}>
            {formFields.map((el: FormFieds, index: number) => (
              <Formik_Control
                key={index}
                control={el.control}
                rest={el.rest}
                formik={formik}
                tools={tools}
                styles={el.styles}
              />
            ))}
            <div>{formConfig.button}</div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ReactControlForm;
