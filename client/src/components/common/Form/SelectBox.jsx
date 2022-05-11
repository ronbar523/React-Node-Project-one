const SelectBox = ({ name, label, error, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <br />
      <select
        {...rest}
        name={name}
        id={name}
        className=" rounded-pill p-1 mt-1 option-select"
      >
        <option value="dog_house" className="option-select">
          Dog House
        </option>
        <option value="dog_food" className="option-select">
          Dog Food
        </option>
        <option value="dog_toys" className="option-select">
          Dog Toys
        </option>
      </select>
      {error && <span className="text-danger">{error}</span>}
    </div>
  );
};

export default SelectBox;
