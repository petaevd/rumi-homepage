import styles from './Footer.module.scss';

export const Footer = () => {
    return(
        <footer id="footer" className={styles["footer"]}>
            <div className={styles["footer__info"]}>
                <div className={styles["footer__info-logo"]}>
                    <a href="/" aria-label="Перейти на главную">
                        <img src="src/assets/images/logo-white.svg" alt="Логотип" />
                    </a>
                </div>
                <div className={styles["footer__info-block"]}>
                    <nav className={styles["footer__info-block__nav"]}>
                        <a href="#" className={styles["footer-item"]}>Личный кабинет</a>
                        <a href="#" className={styles["footer-item"]}>Услуги</a>
                        <a href="#" className={styles["footer-item"]}>Тарифы</a>
                        <a href="#" className={styles["footer-item"]}>О проекте</a>
                    </nav>
                    <div className={styles["footer__info-block__docs"]}>
                        <a href="#" className={styles["footer-item"]}>Политика конфиденциальности</a>
                        <a href="#" className={styles["footer-item"]}>Условия использования</a>
                    </div>
                    <div className={styles["footer__info-block__contact"]}>
                        <a href="#" className={styles["number"]}>rumiapp@yandex.com</a>
                        <a href="#" className={styles["footer-item"]}>Разработано студентами ЧувГУ</a>
                    </div>
                </div>
            </div>
            <div className={styles["footer__copyright"]}>
                &copy; Rumi. Все права защищены
            </div>
        </footer>
    );
};