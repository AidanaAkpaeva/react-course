export interface inputNameProps {
  refFirstName: React.RefObject<HTMLInputElement>;
  refLastName: React.RefObject<HTMLInputElement>;
  nameError: {
    firstNameError: boolean;
    lastNameError: boolean;
  };
}

export interface inputNameState {}
