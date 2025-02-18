import { NavItem } from 'components/shared/NavItem/index.ts';
import styles from './Header.module.scss';
import { Button } from 'components/ui/Button/index.ts';

export const Header = () => {

    return(
        <header className={styles["header"]}>
            <div className={styles["header__logo"]}>
                <a href="/" className="logo-link" aria-label="Перейти на главную">
                    <img src="src/assets/images/logo-black.svg" alt="Логотип" />
                </a>
            </div>
            <nav className={styles["header__nav"]}>
                <div className={styles["header__nav-links"]}>
                    <NavItem to="#" text="Услуги"/>
                    <NavItem to="#" text="Тарифы"/>
                    <NavItem to="#" text="О проекте"/>
                    <NavItem to="#" text="Контакты"/>
                </div>

                <div className={styles["header__nav-btns"]}>
                    {/* <Button
                        children="Зарегистрироваться"
                        appearance='outline'
                        size='medium'
                        rounded
                    /> */}
                    
                    <Button 
                        children="Войти"
                        appearance='solid'
                        size='medium'
                        rounded
                    />
                </div>
            </nav>
        </header>
    );
};