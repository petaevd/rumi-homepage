import styles from './AdvantagesSection.module.scss';
import { Card } from 'components/shared/Card/index.ts';
import CardIcon from 'assets/icons/card-icon.svg';

const cardInfo = [
    {
        title: "Готовые компоненты", 
        text: "быстрая сборка интерфейса с помощью библиотеки компонентов",
    },
    {
        title: "Автоматизация процессов", 
        text: "встроенные инструменты для интеграций бизнес-решений"
    },
    {
        title: "Мгновенное развертывание", 
        text: "распространение приложения в один клик с автоматическим масштабированием"
    },
    {
        title: "ИИ-ассистент", 
        text: "помощь в создании компонентов и оптимизации кода в реальном времени"
    }
];

export const AdvantagesSection = () => {

    return(
        <section className={styles["advantages-section"]}>
            <h2>Платформа быстрой разработки</h2>
            <div className={styles["advantages-section__cards"]}>
                {cardInfo.map((item, i) => {
                    return (
                        <Card 
                            key={i}
                            title={item.title}
                            text={item.text}
                            width={324}
                            icon={CardIcon}
                        />
                    );
                })}
            </div>
        </section>
    );
};