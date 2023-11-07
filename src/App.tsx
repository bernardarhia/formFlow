import FormBuilder from "@/FormBuilder/FormBuilder";
import "@/index.css";
import { FormSchemaProps } from "./interface/FormBuilder";
import { useState } from "react";
function App() {
  const fieldValues = {
    username: "",
  };
  const schema: FormSchemaProps[] = [
    {
      section: {
        col: "col-1",
        form: [
          {
            fieldKey: "username",
            type: "text",
          },
          {
            fieldKey: "email",
            type: "text",
          },
        ],
        title: "A very nice Form",
        description: "A very cool form",
      },
    },
  ];
  const handleInputChange = (data: any) => {
    console.log({ data });
  };
  const handleInputBlur = (data: any) => {
    console.log({ data }, "BLUR");
  };
  const [resetForm, setResetForm] = useState(false)
  return (
    <>
      <h1>Hello world</h1>
      <FormBuilder
        schema={schema}
        defaultValues={fieldValues}
        onFieldChangeHandler={handleInputChange}
        onFieldBlurHandler={handleInputBlur}
        resetForm={resetForm}
      />

      <button onClick={()=> setResetForm(true)}>Reset Form</button>
    </>
  );
}

export default App;
