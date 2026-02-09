const Input = ({
  label,
  type = "text",
  name,
  placeholder,
  onChange,
}) => {
  return (
    <div className="form-control w-full mb-3">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>

      <input
        type={type}
        name={name}
        placeholder={placeholder}   
        onChange={onChange}
        className="input input-bordered w-full"
      />
    </div>
  );
};

export default Input;
