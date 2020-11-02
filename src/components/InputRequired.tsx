import { ErrorMessage, Field } from "formik";
import { BsFillCircleFill } from "react-icons/bs";
import * as React from "react";
import Text_Error from "./Text_Error";

const InputRequired = ({ rest, styles, formik }) => {
  const handlerInput = (e: any) => {
    formik.setFieldValue(rest.name, e.target.value);
  };

  return (
    <div className={rest.div_class}>
      <div className={styles.required_div}>
        <label htmlFor={rest.name} className={rest.label_class}>
          {rest.label}
        </label>
        <BsFillCircleFill className={styles.icon} />
      </div>
      <Field
        id={rest.name}
        name={rest.name}
        className={rest.input_class}
        onChange={(e: any) => handlerInput(e)}
        type={rest.type ? rest.type : "text"}
      />
      {rest.aclaration ? (
        <h4 className={rest.aclaration_class}>{rest.aclaration}</h4>
      ) : null}
      <ErrorMessage name={rest.name}>
        {(msg) => <Text_Error error_div={rest.error_div} error_msg={msg} />}
      </ErrorMessage>
    </div>
  );
};

export default InputRequired;
