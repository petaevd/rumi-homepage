import styles from './SurvaySection.module.scss';
import { Button } from 'components/ui/Button/index.ts';

export const SurvaySection = () => {
    return(
        <section className={styles["survay-section"]}>
            <div className={styles["survay-section__text"]}>
                <h2>Пройдите опрос для участия в бета-тестировании</h2>
                <p>Хотите опробовать Rumi первыми? Примите участие в бета-тестировании и получите доступ к новым возможностям бесплатно!</p>
            </div>

            <div className={styles["survay-section__btn"]}>
                <Button
                    size='large'
                    rounded
                >
                    <a 
                        href="https://example.com/survey" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles["survay-section__button-link"]}
                    >
                        Пройти опрос
                    </a>
                </Button>
            </div>
        </section>
    );
};