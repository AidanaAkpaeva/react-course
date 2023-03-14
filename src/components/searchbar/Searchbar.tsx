import './style.scss';

const Searchbar = ({value, handleChange, handleReset}) => {
  return (
    <div className="search">
      <input
        className="input-home"
        type="text"
        placeholder="Search..."
        name="inputValue"
        onChange={handleChange}
        value={value || ""}
      />
      <button className="btn-reset" onClick={handleReset}></button>
    </div>
  );
};

export default Searchbar;
