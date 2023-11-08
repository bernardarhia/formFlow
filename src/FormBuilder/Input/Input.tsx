import { FormFieldComponentProps } from "@/interface/FormBuilder";
import { FC } from "react";

const Input: FC<FormFieldComponentProps> = ({
  handleBlur,
  handleChange,
  props,
  state,
}) => {
  return (
    <input
      type={props.type}
      name={props.fieldKey}
      id={props.id ? props.id : props.fieldKey}
      value={state[props.fieldKey]}
      onChange={handleChange}
      onBlur={handleBlur}
      className={`w-full border p-2 rounded-sm focus-within:outline-none focus:outline-none focus-visible:outline-none text-base ${props.className}`}
    />
  );
};

export default Input;
