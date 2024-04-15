const InputArea = ({ value, placeholder, isDisabled, onChangeHandler }) => {
  return (
    <div>
      <textarea
        placeholder={placeholder}
        style={{ width: "300px", height: "400px" }}
        value={value}
        disabled={isDisabled}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
    </div>
  );
};

export default InputArea;
