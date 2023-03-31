import { UseFormRegister, FieldErrors } from "react-hook-form";
import { formState } from "../../../pages/FormPage/interface";

export interface contactsProps {
  register: UseFormRegister<formState>;
  errors: FieldErrors<formState>;
}
