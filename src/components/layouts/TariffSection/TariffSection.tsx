import styles from './TariffSection.module.scss';
import { TariffCard } from 'components/shared/TariffCard/TariffCard.tsx';
import star from 'assets/icons/solar_star.svg';
import stars from 'assets/icons/solar_stars.svg';
import starRainbow from 'assets/icons/solar_star-rainbow.svg';

const cardInfo = [
    {
        title: "БАЗОВЫЙ", 
        desciption: "Для начинающих пользователей, которые хотят попробовать платформу без затрат",
        price: "0 ₽",
        icon: star
    },
    {
        title: "КОМАНДНЫЙ", 
        desciption: "Для малых и средних команд, которым нужна гибкость и совместная работа",
        price: "700 ₽/мес",
        icon: stars
    },
    {
        title: "БИЗНЕС", 
        desciption: "Для компаний, которым нужна высокая производительность и расширенные функции",
        price: "1500 ₽/мес",
        icon: starRainbow
    }
];

export const TariffSection = () => {

    return(
        <section className={styles["tariff-section"]}>
            <h2>ТАРИФЫ</h2>
            <div className={styles["tariff-section__cards"]}>
                {cardInfo.map((item, i) => {
                    return (
                        <TariffCard 
                            key={i}
                            title={item.title}
                            description={item.desciption}
                            price={item.price}
                            icon={item.icon}
                        />
                    );
                })}
            </div>
        </section>
    );
};