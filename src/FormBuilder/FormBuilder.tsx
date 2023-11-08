import { ChangeEvent, FC, memo, useEffect } from "react";
import {
  SpecificFormFieldProps,
  FormSchemaProps,
} from "@/interface/FormBuilder";
import FormFieldsComponent from "./FormFieldsComponent";
import { useFormFlowReducer } from "@/hook/reducers";
interface HandlerProps {
  key: string;
  value: string;
}
interface FormBuilderProps {
  schema: FormSchemaProps[];
  onFieldChangeHandler?: (data?: HandlerProps) => void;
  onFieldBlurHandler?: (data?: HandlerProps) => void;
  onValidationChangeHandler?: (validation: Record<string, any>) => void;
  defaultValues: Record<string, any>;
  resetForm?: boolean;
}

const FormBuilder: FC<FormBuilderProps> = ({
  schema,
  onFieldChangeHandler,
  onFieldBlurHandler,
  defaultValues,
  resetForm,
}) => {
  const { state, dispatch } = useFormFlowReducer(defaultValues);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: "CHANGE_INPUT", field: name, value });
    if (onFieldChangeHandler) {
      onFieldChangeHandler({ key: name, value });
    }
  };
  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (onFieldBlurHandler) {
      onFieldBlurHandler({ key: name, value });
    }
  };

  useEffect(() => {
    if (resetForm) {
      dispatch({ type: "RESET_FORM" });
    }
  }, [resetForm]);
  return schema.map((formBuilderSchema, index: number) => {
    return (
      <div key={index}>
        {formBuilderSchema.section.title && (
          <h1 className="text-xl font-medium my-2">{formBuilderSchema.section.title}</h1>
        )}
        {formBuilderSchema.section.description && (
          <p className="text-sm">{formBuilderSchema.section.description}</p>
        )}
        <div
          className={`grid grid-cols-1 lg:grid-${formBuilderSchema.section.col} md:grid-cols-1 ${formBuilderSchema.section.className}`}
        >
          {formBuilderSchema.section.form.map(
            (formData: SpecificFormFieldProps, _i) => {
              return (
                <div key={_i}>
                  <FormFieldsComponent
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    state={state}
                    props={formData}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    );
  });
};

export default memo(FormBuilder);
