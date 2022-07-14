import Button from "@mui/material/Button";

function SMButton(props) {
  const { label, onClick,fullWidth,variant,className,color,size } = props;
  return (
    <>
      <Button onClick={onClick} size={size} color={color} className={className} variant={variant} fullWidth={fullWidth} >
        {label}
        
      </Button>
    </>
  );
}
export default SMButton;
