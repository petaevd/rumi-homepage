import styles from './AdvantagesSection.module.scss';
import { Card } from 'components/shared/Card/index.ts';
import fire from 'assets/icons/solar_fire.svg';
import rocket from 'assets/icons/solar_rocket.svg';
import layers from 'assets/icons/solar_layers.svg';
import robotSmile from 'assets/icons/solar_smile-square.svg';

const cardInfo = [
    {
        title: "Автоматизация процессов", 
        text: "встроенные инструменты ускоряют работу и упрощают интеграцию бизнес-решений",
        icon: fire
    },
    {
        title: "Мгновенное развертывание", 
        text: "быстрое распространение приложений с автоматическим масштабированием",
        icon: rocket
    },
    {
        title: "Готовые компоненты", 
        text: "быстрая сборка интерфейса с помощью готовой библиотеки компонентов ",
        icon: layers
    },
    {
        title: "ИИ-ассистент", 
        text: "ускорение создания компонентов и оптимизация кода в реальном времени",
        icon: robotSmile
    }
];

export const AdvantagesSection = () => {

    return(
        <section className={styles["advantages-section"]}>
            <h2>ПЛАТФОРМА БЫСТРОЙ РАЗРАБОТКИ</h2>
            <div className={styles["advantages-section__cards"]}>
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
        </section>
    );
};