const Textarea = ({ name, label, error, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <textarea {...rest} name={name} id={name}></textarea>
      {error && <span className="text-danger">{error}</span>}
    </div>
  );
};

export default Textarea;
