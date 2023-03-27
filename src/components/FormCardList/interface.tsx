export interface CardListProps {
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
}

export interface CardListState {}
