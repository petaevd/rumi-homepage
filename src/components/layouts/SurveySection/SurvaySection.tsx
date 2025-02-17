import styles from './SurvaySection.module.scss';

export const SurvaySection = () => {
    return(
        <section className={styles["survay-section"]}>
            <div className={styles["survay-section__text"]}>
                <h3>Станьте первым тестировщиком нашей платформы</h3>
                <p>Попробуйте Rumi первыми! Участвуйте в бета-тестировании и получите эксклюзивный доступ к новым возможностям – бесплатно!</p>
            </div>

            <div className={styles["survay-section__form"]}>
                
            </div>
        </section>
    );
};