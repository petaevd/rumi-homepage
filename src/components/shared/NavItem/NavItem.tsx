import { Link } from 'react-router-dom';
import { NavItemProps } from './types.ts';
import styles from './NavItem.module.scss';

export const NavItem = ({ 
    to,
    text 
}: NavItemProps) => (
  <Link 
    to={to}
    className={styles["nav__link"]}
    role="link"
    aria-label={`Перейти к ${text}`}
  >
    {text}
  </Link>
);