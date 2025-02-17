import styles from './AdvantagesSection.module.scss';
import { Card } from 'components/shared/Card/index.ts';
import rocket from 'assets/icons/ion_rocket-sharp.svg';
import star from 'assets/icons/solar_star-bold-duotone.svg';
import starFall from 'assets/icons/solar_star-fall-bold-duotone.svg';
import robot from 'assets/icons/mage_robot-happy-fill.svg';

const cardInfo = [
    {
        title: "Автоматизация процессов", 
        text: "встроенные инструменты для интеграций бизнес-решений",
        icon: rocket
    },
    {
        title: "Мгновенное развертывание", 
        text: "распространение приложения в один клик с автоматическим масштабированием",
        icon: star
    },
    {
        title: "Готовые компоненты", 
        text: "быстрая сборка интерфейса с помощью библиотеки компонентов",
        icon: starFall
    },
    {
        title: "ИИ-ассистент", 
        text: "помощь в создании компонентов и оптимизации кода в реальном времени",
        icon: robot
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
                            width={324}
                            icon={item.icon}
                        />
                    );
                })}
            </div>
        </section>
    );
};