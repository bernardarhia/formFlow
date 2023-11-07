import FormBuilder from "@/FormBuilder/FormBuilder";
import "@/index.css";
import { FormSchemaProps } from "./interface/FormBuilder";
function App() {
  const fieldValues = {
    username: "",
    email: "",
  };
  const schema: FormSchemaProps[] = [
    {
      section: {
        col: "cols-4",
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
        className: "gap-4"
      },
    },
  ];
  const handleInputChange = (data: any) => {
    console.log({ data });
  };
  const handleInputBlur = (data: any) => {
    console.log({ data }, "BLUR");
  };

  return (
    <>
      <h1>Hello world</h1>
      <FormBuilder
        schema={schema}
        defaultValues={fieldValues}
        onFieldChangeHandler={handleInputChange}
        onFieldBlurHandler={handleInputBlur}
      />
    </>
  );
}

export default App;
