import styles from './OprosSection.module.scss';
import { Button } from 'components/ui/Button/index.ts';

export const OprosSection = () => {
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
                        href="https://forms.yandex.ru/u/67b5f74690fa7b07927e1969/" 
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
    }