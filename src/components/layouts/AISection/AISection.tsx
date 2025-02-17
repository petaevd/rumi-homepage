import styles from './AISection.module.scss';
import { Card } from 'components/shared/Card/index.ts';
import AIImage from 'assets/images/AIImage.svg';
import like from 'assets/icons/solar_like.svg';
import codeSquare from 'assets/icons/solar_code-square.svg';
import ligthbulb from 'assets/icons/solar_lightbulb.svg';

const cardInfo = [
    {
        title: "Ускорение работы с помощью ИИ", 
        text: "ИИ-помощник анализирует ваш проект и ускоряет разработку в реальном времени",
        icon: like
    },
    {
        title: "Генерация кода", 
        text: "Автоматическое создание компонентов и функциональности на основе ваших требований",
        icon: codeSquare
    },
    {
        title: "Умные подсказки", 
        text: "Рекомендации для улучшения производительности и пользовательского опыта",
        icon: ligthbulb
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
                                icon={item.icon}
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