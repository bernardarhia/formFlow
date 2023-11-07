export interface FormIconProps {
  name: string;
  position: string;
  className?: string;
  size?: string; 
}

export interface FormFieldProps {
  type: string;
  label?: string | { text: string; icon: FormIconProps };
  icon?: FormIconProps;
  onClick?: () => void;
  id?: string;
  placeholder?: string;
  attrs?: Record<string, any>;
  className?: string;
  disabled?: boolean;
  defaultValue?: any;
  validation?: (value: any) => boolean;
  options?: { value: any; label: string }[];
}

type ColValues = {
  [K in `col-${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12}`]: K;
};

export interface FormSectionProps {
  form: FormFieldProps[];
  className?: string;
  col: keyof ColValues;
  title?: string;
  description?: string;
}

export interface FormSchemaProps {
  section: FormSectionProps;
  className?: string;
  col: keyof ColValues;
  name?: string;
  description?: string;
}

const schema: FormSchemaProps[] = [];
