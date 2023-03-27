export interface FormState {
  form: {
    inputTextFirstName?: string;
    inputTextLastName?: string;
    inputTextEmail?: string;
    inputTextPhone?: string;
    selectorCountry?: string;
    selectorCity?: string;
    inputTextStreetAddress?: string;
    inputCheckbox?: boolean;
  };
  formError: {
    firstNameError: boolean;
    lastNameError: boolean;
    emailError: boolean;
    phoneError: boolean;
    countryError: boolean;
    cityError: boolean;
    streetAddressError: boolean;
    checkboxError: boolean;
  };
  formItems: {
    inputTextFirstName?: string;
    inputTextLastName?: string;
    inputTextEmail?: string;
    inputTextPhone?: string;
    selectorCountry?: string;
    selectorCity?: string;
    inputTextStreetAddress?: string;
    inputCheckbox?: boolean;
  }[];
  dataSave: string;
}
