export interface FormState {
  form: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    country?: string;
    city?: string;
    streetAddress?: string;
    checkbox?: boolean;
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
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    country?: string;
    city?: string;
    streetAddress?: string;
  }[];
  dataSave: string;
}
