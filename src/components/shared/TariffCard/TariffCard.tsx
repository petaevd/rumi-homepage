import { TariffCardProps } from "./types.ts";
import styles from './TariffCard.module.scss';
import { Button } from "components/ui/Button/Button.tsx";

export const TariffCard = ({
    title,
    description,
    price,
    icon,
    buttonText
} : TariffCardProps ) => {
    return(
        <div className={styles["card"]}>
            <div className={styles["card__icon"]}>
                <img src={icon} alt="Иконка" />
            </div>
            
            <div className={styles["card__block"]}>
                <div className={styles["card__title"]}>{title}</div>
                <div className={styles["card__description"]}>{description}</div>
                <div className={styles["card__price"]}>{price}</div>
                <div className={styles["card__btn"]}>
                    <Button
                        children={buttonText}
                    />
                </div>
            </div>
        </div>
    );
};
