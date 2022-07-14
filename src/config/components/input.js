import TextField from "@mui/material/TextField";

function SMInput(props) {
  const { value,label, type, variant, onChange, required, disabled,fullWidth,className } = props;
  return (
    <>
      <TextField
        id="outlined-basic"
        type={type}
        className={className}
        fullWidth={fullWidth}
        value={value}
        margin="normal"
        label={label}
        onChange={onChange}
        required={required}
        disabled={disabled}
        variant={variant ? variant : "outlined"}
      />
    </>
  );
}
export default SMInput;
