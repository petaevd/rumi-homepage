import styles from './Footer.module.scss';

export const Footer = () => {
    return(
        <footer className={styles["footer"]}>
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
                        <a href="#" className={styles["number"]}>8 900 585 00 00</a>
                        <a href="#" className={styles["footer-item"]}>rumiapp@yandex.com</a>
                        {/* <div className={styles["footer__info-block__contact-social"]}>
                            <a href="https://vk.com">
                                <img src="src/assets/icons/vk.svg" alt="Иконка ВКонтакте" />
                            </a>
                            <a href="https://web.telegram.org/">
                                <img src="src/assets/icons/tg.svg" alt="Иконка Телеграм" />
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className={styles["footer__copyright"]}>
                &copy; Rumi. Все права защищены
                <div>Разработано студентами ЧувГУ</div>
            </div>
        </footer>
    );
};