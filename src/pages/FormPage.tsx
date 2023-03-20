import React from "react";
import "./style.scss";

import FormCardItem from "../components/formCardItem/FormCardItem";
import FormInputName from "../components/formElements/FormInputName";
import FormInputContacts from "../components/formElements/FormInputContacts";
import FormInputStreetAddress from "../components/formElements/FormInputStreetAddress";
import FormCheckboxUserAgreement from "../components/formElements/FormCheckboxUserAgreement";
import FormSelectAddress from "../components/formElements/FormSelectAddress";

interface FormState {
  isOpen: boolean;
  inputTextFirstName: string | null;
  inputTextLastName: string | null;
}

class FormPage extends React.Component<{}, FormState> {
  private refFirstName: React.RefObject<HTMLInputElement> | any;
  private refLastName: React.RefObject<HTMLInputElement> | any;

  constructor(prors: {}) {
    super(prors);
    this.state = {
      isOpen: false,
      inputTextFirstName: "",
      inputTextLastName: "",
    };
    this.refFirstName = React.createRef();
    this.refLastName = React.createRef();
  }

  handleClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    this.setState({ isOpen: true });
    this.setState({
      inputTextFirstName: this.refFirstName.current.value,
      inputTextLastName: this.refLastName.current.value,
    });
  };

  render() {
    return (
      <>
        <div className="formbold-main-wrapper">
          <div className="formbold-form-wrapper">
            <form method="POST">
              <h2 className="formbold-form-title">Create your account now!</h2>
              {/* First and last name */}
              <FormInputName ref={()=> {this.refFirstName, this.refLastName} }/>
              {/* Email and phone*/}
              <FormInputContacts />

              {/* Country and city */}
              <FormSelectAddress />

              {/* Street adress */}
              <FormInputStreetAddress />

              {/* User agreement */}
              <FormCheckboxUserAgreement />

              <button className="formbold-btn" onClick={this.handleClick}>
                Register Now
              </button>
            </form>
          </div>
        </div>
        {this.state.isOpen && (
          <FormCardItem
            Firstname={this.state.inputTextFirstName}
            Lastname={this.state.inputTextLastName}
          />
        )}
      </>
    );
  }
}

export default FormPage;
