import { UseFormRegister, FieldErrors } from "react-hook-form";
import { formState } from "../../../pages/FormPage/interface";

export interface checkboxProps {
  register: UseFormRegister<formState>;
  errors: FieldErrors<formState>;
}
