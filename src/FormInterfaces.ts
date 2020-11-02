import * as React from "react";

export interface Tools {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface FormFieds {
  control: string;
  rest?: RestOptions;
  async?: AsyncOptions;
  styles?: StylesOptions;
}

export interface FetchOptions {
  url: string;
  method?: string;
  data?: any;
  callback: any;
}

export interface RadioOptions {
  key: string;
  value: string;
}

export interface RestOptions {
  amountName?: string;
  name?: string;
  label?: string;
  type?: string;
  value?: string;
  div_class?: string;
  label_class?: string;
  input_class?: string;
  error_div?: string;
  btn_class?: string;
  options?: string[];
  radioOptions?: RadioOptions[];
  div_amount?: string;
  amount_div_class?: string;
  amount_label?: string;
  required?: boolean;
  input_type?: string;
  hide?: boolean;
  aclaration?: string;
  aclaration_class?: string;
  change?: boolean;
  swapFile?: boolean;
  component?: any;
  disable?: boolean;
  useTools?: boolean;
  singleDiv?: boolean;
  icon?: React.Component;
  url?: string;
  callback?: any;
  asyncFunc?: boolean;
  fetchOptions?: FetchOptions;
  subRest?: RestOptions;
}

export interface StylesOptions {
  radioInput_class?: string;
  labelInput_class?: string;
  singleDiv_class?: string;
  radio_class?: string;
  required_div?: string;
  icon?: string;
}

export interface AsyncOptions {
  asyncUrl?: string;
}
