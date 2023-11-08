import FormBuilder from "@/FormBuilder/FormBuilder";
import "@/index.css";
import { FormSchemaProps } from "./interface/FormBuilder";
import Select from "./FormBuilder/Select/Select";
function App() {
  const fieldValues = {
    username: "",
    email: "",
  };
  const schema: FormSchemaProps[] = [
    {
      section: {
        col: "grid-cols-4",
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
        title: "User",
        description: "A very cool form",
        className: "gap-4",
      },
    },
  ];
  const handleInputChange = (data: any) => {
    console.log({ data });
  };
  const handleInputBlur = (data: any) => {
    console.log({ data }, "BLUR");
  };
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
    // Add more options as needed
  ];
  return (
    <>
    <div className="m-5">
      <Select options={options} isSearchable/>
    </div>
      {/* <FormBuilder
        schema={schema}
        defaultValues={fieldValues}
        onFieldChangeHandler={handleInputChange}
        onFieldBlurHandler={handleInputBlur}
      /> */}
    </>
  );
}

export default App;
