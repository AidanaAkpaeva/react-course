import { UseFormRegister, FieldErrors } from "react-hook-form";
import { formState } from "../../../pages/FormPage/interface";

export interface selectProps {
  register: UseFormRegister<formState>;
  errors: FieldErrors<formState>;
}
