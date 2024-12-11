// components/common/Button.js
import { Button as MuiButton } from '@mui/material';

const Button = ({ children, ...props }) => {
  // You can add more checks here if you want to handle specific props
  const { button, ...rest } = props;

  return <MuiButton {...rest}>{children}</MuiButton>;
};

export default Button;
