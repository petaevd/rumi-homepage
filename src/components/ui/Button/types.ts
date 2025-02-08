import { ReactNode, MouseEvent, CSSProperties } from 'react';

export type ButtonVariant = 
  'primary' |
  'secondary' |
  'success' |
  'danger' |
  'warning' |
  'info' |
  'light' |
  'dark';

export type ButtonAppearance = 
  'solid' |
  'outline' |
  'text' |
  'link';

export type ButtonSize = 
  'small' |
  'medium' |
  'large';

export interface ButtonProps {
  /* Содержимое кнопки */
  children: ReactNode;
  /* Вариант стиля */
  variant?: ButtonVariant;
  /* Тип заливки */
  appearance?: ButtonAppearance;
  /* Размер кнопки */
  size?: ButtonSize;
  rounded?: boolean | number;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  /* Растянуть на всю ширину */
  fullWidth?: boolean;
  /* Неактивное состояние */
  disabled?: boolean;
  /* Тип кнопки */
  type?: 'button' | 'submit' | 'reset';
  /* Дополнительные классы */
  className?: string;
  /* Обработчик клика */
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  style?: CSSProperties;
}