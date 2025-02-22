import styles from './StartSection.module.scss';
import { Button } from 'components/ui/Button/index.ts';

export const StartSection = () => {

    return(
        <section className={styles["start-section"]}>
            <div className={styles["start-section__left"]}>
                <div className={styles["start-section__left-form"]}>
                    <div className={styles["start-section__left-form-text"]}>
                        <h1>Платформа для быстрой разработки бизнес-идей</h1>
                        <p>Создавайте, тестируйте и запускайте приложения быстрее с помощью нашей low-code платформы</p>
                    </div>
                    <div className={styles["start-section__left-form-btns"]}>
                        <Button 
                            rounded
                            size='large'
                        >
                            <a 
                                href="https://forms.yandex.ru/u/67b5f74690fa7b07927e1969/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Создать приложение
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
            <div className={styles["start-section__rigth"]}>
                <img 
                    className={styles["start-section__rigth-img"]} 
                    src="./src/assets/images/Phone.svg" 
                    alt="Картинка телефона" 
                />
            </div>
        </section>
    );
};