import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { formState } from "./interface";
import "./../style.scss";

import FormInputName from "../../components/FormElements/FormInputName/FormInputName";
import Contacts from "../../components/FormElements/Contacts/Contacts";
import FormInputStreetAddress from "../../components/FormElements/FormInputStreetAddress/FormInputStreetAddress";
import FormCheckbox from "../../components/FormElements/FormCheckBox/FormCheckbox";
import FormSelectAddress from "../../components/FormElements/FormInputAddress/FormSelectAddress";
import FormCardList from "../../components/FormCardList/FormCardList";

const FormPage: React.FC<{}> = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formState>({
    mode: "onChange",
  });

  const [formItem, setFormitem] = useState([] as Array<formState>);

  const onClick: SubmitHandler<formState> = (formItems) => {
    setFormitem([...formItem, formItems]);
    reset();
  };

  return (
    <>
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <form>
            <h2 className="formbold-form-title">Create your account now!</h2>

            {/* Name */}
            <FormInputName register={register} errors={errors} />

            {/* Contacts */}
            <Contacts register={register} errors={errors} />

            {/* Address */}
            <FormSelectAddress register={register} errors={errors} />

            {/* Street Address */}
            <FormInputStreetAddress register={register} errors={errors} />

            {/* checkbox */}
            <FormCheckbox register={register} errors={errors} />
            <button onClick={handleSubmit(onClick)} className="formbold-btn">
              Register Now
            </button>
          </form>
        </div>
      </div>
      <FormCardList formItems={formItem} />
    </>
  );
};

export default FormPage;
