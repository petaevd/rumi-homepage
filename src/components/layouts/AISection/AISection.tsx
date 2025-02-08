import styles from './AISection.module.scss';
import { Card } from 'components/shared/Card/index.ts';
import AIImage from 'assets/images/AIImage.svg';
import CardIcon from 'assets/icons/card-icon.svg';

const cardInfo = [
    {
        title: "Ускорение работы с помощью ИИ", 
        text: "ИИ-ассистент анализирует ваш проект и помогает  в создании приложения в реальном времени"
    },
    {
        title: "Генерация кода", 
        text: "Автоматическое создание компонентов и функциональности на основе ваших требований с учетом лучших практик"
    },
    {
        title: "Умные подсказки", 
        text: "Рекомендации для улучшения производительности и пользовательского опыта"
    }
];

export const AISection = () => {

    return(
        <section className={styles["ai-section"]}>
            <div className={styles["ai-section__components"]}>
                <div className={styles["ai-section__components-cards"]}>
                    {cardInfo.map((item, i) => {
                        return (
                            <Card 
                                key={i}
                                title={item.title}
                                text={item.text}
                                icon={CardIcon}
                            />
                        );
                    })}
                </div>
                <div className={styles["ai-section__components-img"]}>
                    <img src={AIImage} alt="Картинка робота" />
                </div>
            </div>     
        </section>
    );
};