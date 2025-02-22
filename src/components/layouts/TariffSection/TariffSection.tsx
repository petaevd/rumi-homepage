import styles from './TariffSection.module.scss';
import { TariffCard } from 'components/shared/TariffCard/TariffCard.tsx';
import star from 'assets/icons/solar_star.svg';
import stars from 'assets/icons/solar_stars.svg';
import starRainbow from 'assets/icons/solar_star-rainbow.svg';
import starFall from 'assets/icons/solar_star-fall.svg';

const cardInfo = [
    {
        title: "БАЗОВЫЙ", 
        desciption: "Для начинающих пользователей, которые хотят попробовать платформу без затрат",
        price: "0 ₽",
        icon: star,
        buttonText: "Попробовать"
    },
    {
        title: "КОМАНДНЫЙ", 
        desciption: "Для малых и средних команд, которым нужна гибкость и совместная работа",
        price: "999 ₽/мес",
        icon: stars,
        buttonText: "Попробовать бесплатно"
    },
    {
        title: "БИЗНЕС", 
        desciption: "Для компаний, которым нужна высокая производительность и расширенные функции",
        price: "1299 ₽/мес",
        icon: starRainbow,
        buttonText: "Попробовать бесплатно"
    },
    {
        title: "PRO", 
        desciption: "Доступны все возможности нашей платформы Rumi",
        price: "1699 ₽/мес",
        icon: starFall,
        buttonText: "Попробовать бесплатно"
    }
];

export const TariffSection = () => {

    return(
        <section id="tariffs-section" className={styles["tariff-section"]}>
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
                            buttonText={item.buttonText}
                        />
                    );
                })}
            </div>
        </section>
    );
};