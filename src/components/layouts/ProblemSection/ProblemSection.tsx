import styles from './ProblemSection.module.scss';
import { Card } from 'components/shared/Card/index.ts';
import AASSEE from 'assets/images/AASSEE.svg';
import spedometer from 'assets/icons/solar_spedometer.svg';
import settings from 'assets/icons/solar_settings.svg';
import wallet from 'assets/icons/solar_wallet.svg';

const cardInfo = [
    {
        title: "Быстрая разработка", 
        text: "С нами ваши идеи будут реализованы в короткие сроки, а не за месяцы традиционной разработки",
        icon: spedometer
    },
    {
        title: "Низкие затраты", 
        text: "Никаких затрат на большую команду и инфраструктуру не потребуется",
        icon: wallet
    },
    {
        title: "Автоматизированные процессы", 
        text: "Встроенные инструменты автоматизируют рутинные задачи, экономя ваше время",
        icon: settings
    }
];

export const ProblemSection = () => {

    return(
        <section className={styles["problem-section"]} id="problem-section">
            <h2>ЗАБУДЬТЕ О ДОЛГОЙ И ДОРОГОЙ РАЗРАБОТКЕ</h2>
            <div className={styles["problem-section__components"]}>
                <div className={styles["problem-section__components-img"]}>
                    <img src={AASSEE} alt="Картинка компьютера" />
                </div>
                <div className={styles["problem-section__components-cards"]}>
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
            </div>     
        </section>
    );
};