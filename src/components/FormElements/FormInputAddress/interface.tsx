export interface selectProps {
  refCountry: React.RefObject<HTMLSelectElement>;
  refCity: React.RefObject<HTMLSelectElement>;
  addressError: {
    countryError: boolean;
    cityError: boolean;
  };
};

export interface selectState {}