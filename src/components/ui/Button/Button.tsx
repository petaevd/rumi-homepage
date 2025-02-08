import classNames from 'clsx';
import styles from './Button.module.scss';
import { ButtonProps } from './types.ts';

export const Button = ({
  children,
  variant = 'primary',
  appearance = 'solid',
  size = 'medium',
  rounded = false,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth = false,
  disabled = false,
  type = 'button',
  className,
  onClick,
  style,
  ...rest
}: ButtonProps) => {
  const buttonClasses = classNames(
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${appearance}`],
    styles[`button--${size}`],
    {
      [styles['button--full-width']]: fullWidth,
      [styles['button--disabled']]: disabled,
      [styles['button--rounded']]: !!rounded,
    },
    className
  );

  const customStyles = {
    ...style,
    backgroundColor,
    color: textColor,
    borderColor,
    borderRadius: typeof rounded === 'number' ? `${rounded}px` : undefined,
  };

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      type={type}
      onClick={onClick}
      aria-disabled={disabled}
      style={customStyles}
      {...rest}
    >
      {children}
    </button>
  );
};