import { FormBuilderAction, FormBuilderState } from "@/interface/FormBuilder";
import { useReducer } from "react";

export const useFormFlowReducer = (defaultValues: Record<string, any>) => {
  const reducer = (state: FormBuilderState, action: FormBuilderAction) => {
    switch (action.type) {
      case "CHANGE_INPUT":
        if ("field" in action) {
          return {
            ...state,
            [action.field]: action.value,
          };
        }
        return state;
      case "RESET_FORM":
        return defaultValues;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, defaultValues);
  return { state, dispatch };
};
