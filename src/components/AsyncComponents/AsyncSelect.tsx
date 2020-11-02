import * as React from "react";
import { Field, ErrorMessage } from "formik";
import Text_Error from ".././Text_Error";
import { RestOptions, Tools } from "../../FormInterfaces";
import Axios from "axios";

interface SelectCompProps {
  rest: RestOptions;
  tools?: Tools;
  formik: any;
}

const AsyncSelect = ({ rest, formik }: SelectCompProps) => {
  const [stateOptions, setStateOptions] = React.useState<any>(undefined);

  React.useEffect(() => {
    if (stateOptions === undefined) {
      fetchOptions(rest.url);
    }
  }, []);

  const fetchOptions = async (url: string) => {
    const data = await Axios.get(url);

    if (rest.callback) {
      return setStateOptions(rest.callback(data));
    }

    return setStateOptions(data);
  };

  return (
    <div className={rest.div_class}>
      <label className={rest.label_class} htmlFor={rest.name}>
        {rest.label}
      </label>
      <Field
        as="select"
        id={rest.name}
        name={rest.name}
        className={rest.input_class}
      >
        {stateOptions &&
          stateOptions.map((el: string) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
      </Field>
      <ErrorMessage name={rest.name} component={Text_Error} />
    </div>
  );
};

export default AsyncSelect;
