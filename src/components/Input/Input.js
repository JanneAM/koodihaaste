import "./Input.css";

const Input = ({ placeholder,error, onChange, value }) => {
  return (
    <div className="input-container">
      <input type="text" placeholder={placeholder} onChange={onChange} value={value}></input>
      {error && <p class="error-text">{error}</p>}
    </div>
  );
};

export default Input;
