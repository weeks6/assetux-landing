import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import './Button.css';

type ButtonProps = {
  title: string;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({ title, ...rest }: ButtonProps) => {
  return (
    <button {...rest} className={`button ${rest.className}`}>
      {title}
    </button>
  );
};

export default Button;
