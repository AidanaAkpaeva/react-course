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

  const [formItems, setFormItem] = useState<Array<formState>>([]);

  const onClick: SubmitHandler<formState> = (formItem) => {
    setFormItem([...formItems, formItem]);
    reset();
  };

  return (
    <>
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <form>
            <h2 className="formbold-form-title">Create your account now!</h2>

            <FormInputName register={register} errors={errors} />

            <Contacts register={register} errors={errors} />

            <FormSelectAddress register={register} errors={errors} />

            <FormInputStreetAddress register={register} errors={errors} />

            <FormCheckbox register={register} errors={errors} />
            <button onClick={handleSubmit(onClick)} className="formbold-btn">
              Register Now
            </button>
          </form>
        </div>
      </div>
      <FormCardList formItems={formItems} />
    </>
  );
};

export default FormPage;
