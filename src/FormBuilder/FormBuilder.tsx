import { FC } from "react";
import { FormSchemaProps } from "@/interface/FormBuilder";

interface HandlerProps {
  key: string;
  value: string;
}
interface FormBuilderProps {
  schema: FormSchemaProps;
  onFieldChangeHandler: (data?: HandlerProps) => void;
  onFieldBlurHandler: (data?: HandlerProps) => void;
  onValidationChangeHandler: (validation: Record<string, any>) => void;
  defaultValues: Record<string, any>;
}
const FormBuilder: FC<FormBuilderProps> = ({
  schema,
  onFieldChangeHandler,
  onFieldBlurHandler,
  onValidationChangeHandler,
  defaultValues
}) => {
  return <div></div>;
};

export default FormBuilder;
