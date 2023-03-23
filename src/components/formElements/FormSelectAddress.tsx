import { CountryList } from "./../../helpers/CountryList";
import { CityList } from "./../../helpers/CityList";

const FormSelectAddress = ({ refCountry, refCity }) => {
  return (
    <div className="formbold-input-flex">
      <div>
        <label className="formbold-form-label"> Country </label>
        <select className="formbold-form-input" ref={refCountry}>
          {CountryList.map(({ id, nameCountry }) => (
            <option key={id}>{nameCountry}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="formbold-form-label"> City </label>
        <select className="formbold-form-input" ref={refCity}>
          {CityList.map(({ id, nameCity }) => (
            <option key={id}>{nameCity}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FormSelectAddress;
