import "./Input.css";

const Input = ({ placeholder,error, onChange, value, inputName }) => {
  return (
    <div className="input-container">
        <label className="input-label" htmlFor={inputName}>{inputName}</label>
        <div>
      <input type="text" name={inputName} placeholder={placeholder} onChange={onChange} value={value}></input>
      {error && <p className="error-text">{error}</p>}
      </div>
    </div>
  );
};

export default Input;
