import styles from './ProblemSection.module.scss';
import { Card } from 'components/shared/Card/index.ts';
import AASSEE from 'assets/images/AASSEE.svg';
import CardIcon from 'assets/icons/card-icon.svg';

const cardInfo = [
    {
        title: "Быстрая разработка", 
        text: "С нами ваши идеи будут реализованы в короткие сроки, а не за месяцы традиционной разработки"
    },
    {
        title: "Низкие затраты", 
        text: "Никаких затрат на большую команду и инфраструктуру не потребуется"
    },
    {
        title: "Автоматизированные процессы", 
        text: "Встроенные инструменты автоматизируют рутинные задачи, экономя ваше время"
    }
];

export const ProblemSection = () => {

    return(
        <section className={styles["problem-section"]}>
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
                                icon={CardIcon}
                            />
                        );
                    })}
                </div>
            </div>     
        </section>
    );
};