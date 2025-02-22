import { NavItem } from 'components/shared/NavItem/index.ts';
import styles from './Header.module.scss';
import { Button } from 'components/ui/Button/index.ts';

export const Header = () => {
    const handleScroll = (id:string) => {
        const element = document.getElementById(id);
        if (element) {
          const headerHeight = document.querySelector('header')!.offsetHeight;
          window.scrollTo({
            top: element.offsetTop - headerHeight,
            behavior: 'smooth'
          });
        }
      };

    return(
        <header className={styles["header"]}>
            <div className={styles["header__logo"]}>
                <a href="/" className="logo-link" aria-label="Перейти на главную">
                    <img src="src/assets/images/logo-black.svg" alt="Логотип" />
                </a>
            </div>
            <nav className={styles["header__nav"]}>
                <div className={styles["header__nav-links"]}>
                    <NavItem onClick={() => handleScroll('problem-section')} to="#problem-section" text="Преимущества"/>
                    <NavItem onClick={() => handleScroll('tariffs-section')} to="#tariffs-section" text="Тарифы"/>
                    <NavItem onClick={() => handleScroll('faq-section')} to="#faq-section" text="FAQ"/>
                    <NavItem onClick={() => handleScroll('footer')} to="#footer" text="Контакты"/>
                </div>

                <div className={styles["header__nav-btns"]}>
                    <Button
                        appearance='solid'
                        size='medium'
                        rounded
                    >
                        <a 
                            href="https://forms.yandex.ru/u/67b5f74690fa7b07927e1969/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Присоединится к нам
                        </a>
                    </Button>
                </div>
            </nav>
        </header>
    );
};