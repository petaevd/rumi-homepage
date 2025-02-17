import styles from './RoadSection.module.scss';
import { Card } from 'components/shared/Card/index.ts';
// import first from 'assets/icons/first-step.svg';
// import second from 'assets/icons/second-step.svg';
// import three from 'assets/icons/three-step.svg';

const cardInfo = [
    {
        title: "Регистрация", 
        text: "Зарегистрируйтесь за пару минут и начните путь к созданию приложения",
        number: "01"
        // icon: first
    },
    {
        title: "Создание приложения", 
        text: "Соберите функциональное и стильное приложение без особых усилий",
        number: "02"
        // icon: second
    },
    {
        title: "Продвижение", 
        text: "Собирайте аналитику и улучшайте продукт для максимальной прибыли",
        number: "03"
        // icon: three
    }
];

export const RoadSection = () => {

    return(
        <section className={styles["road-section"]}>
            <h2>ОТ ИДЕИ ДО ЗАПУСКА ВСЕГО ТРИ ШАГА</h2>
            <div className={styles["road-section__cards"]}>
                {cardInfo.map((item, i) => {
                    return (
                        <Card 
                            key={i}
                            title={item.title}
                            text={item.text}
                            number={item.number}
                            // icon={item.icon}
                        />
                    );
                })}
            </div>
        </section>
    );
};