export interface contactsProps {
  refEmail: React.RefObject<HTMLInputElement>;
  refPhone: React.RefObject<HTMLInputElement>;
  contactsError: {
    emailError: boolean;
    phoneError: boolean;
  };
}
