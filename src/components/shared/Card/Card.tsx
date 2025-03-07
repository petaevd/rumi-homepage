import { CardProps } from "./types.ts";
import styles from './Card.module.scss';

export const Card = ({
    title,
    text,
    width,
    icon,
    number
} : CardProps ) => { // TODO: Поменять div на p или span 
    return(
        <div className={styles["card"]} style={{ width: width !== undefined ? width : undefined }}>
            {number && (
                <div className={styles["card__number"]}>
                    {number}
                </div>
            )}

            {icon && (
                <div className={styles["card__icon"]}>
                    <img src={icon} alt="Иконка" />
                </div>
            )}
            
            <div className={styles["card__block"]}>
                <div className={styles["card__title"]}>{title}</div>
                <div className={styles["card__text"]}>{text}</div>
            </div>
        </div>
    );
};
