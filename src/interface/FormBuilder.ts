import { ChangeEvent } from "react";

export interface FormIconProps {
  name: string;
  position: string;
  className?: string;
  size?: string;
}

type FormFieldType = "text" | "date" | "select" | "email";
export interface FormFieldProps {
  type: FormFieldType;
  fieldKey: string;
  label?: string | { text: string; icon?: FormIconProps; className?: string };
  icon?: FormIconProps;
  id?: string;
  placeholder?: string;
  attrs?: Record<string, any>;
  className?: string;
  disabled?: boolean;
  defaultValue?: any;
  validation?: (value: any) => boolean;
}

interface InputFieldProps extends FormFieldProps {
  type: "text" | "email";
}
interface SelectFieldProps extends FormFieldProps {
  type: "select";
  options: { label: string; value: string }[];
}
export type SpecificFormFieldProps = InputFieldProps | SelectFieldProps;
type ColValues = {
  [K in `grid-cols-${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12}`]: K;
};

export interface FormSectionProps {
  form: SpecificFormFieldProps[];
  className?: string;
  col: keyof ColValues;
  title?: string;
  description?: string;
}

export interface FormSchemaProps {
  section: FormSectionProps;
  title?: string;
}
export type FormBuilderState = Record<string, any>;
export type FormBuilderAction =
  | { type: "CHANGE_INPUT"; field: string; value: string }
  | { type: "RESET_FORM" }
  | { type: string };

export interface FormFieldComponentProps {
  props: SpecificFormFieldProps;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: ChangeEvent<HTMLInputElement>) => void;
  state: FormBuilderState;
}
