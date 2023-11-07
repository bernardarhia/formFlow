import { FormFieldComponentProps } from "@/interface/FormBuilder";
import { FC, memo } from "react";
import Input from "./Input/Input";

const FormFieldsComponent: FC<FormFieldComponentProps> = ({
  state,
  props,
  handleChange,
  handleBlur,
}) => {
  switch (props.type) {
    case "text":
    case "email":
      return (
        <Input
          state={state}
          props={props}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      );

    default:
      break;
  }
};

export default memo(FormFieldsComponent);
