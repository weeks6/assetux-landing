import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';
import './ChipButton.css';

type ChipButtonProps = {
  title?: string;
  active?: boolean;
} & DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

const ChipButton = ({
  title,
  children,
  className,
  active
}: ChipButtonProps) => {
  return (
    <a
      className={`${'chip-button'} ${className ? className : ''} ${
        active ? 'chip-button__active' : ''
      }`}
    >
      <span className='chip-button__text'>{title}</span>
      {children}
    </a>
  );
};

export default ChipButton;
