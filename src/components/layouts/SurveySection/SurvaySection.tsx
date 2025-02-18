import styles from './SurvaySection.module.scss';
import { useState } from "react";
import { FormData } from './types.ts';
import { Button } from 'components/ui/Button/index.ts';

export const SurvaySection = () => {
    const [formData, setFormData] = useState<FormData>({ name: "", email: "", subscribed: false });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Форма отправлена:", formData);
    };

    return(
        <section className={styles["survay-section"]}>
            <div className={styles["survay-section__text"]}>
                <div className={styles["survay-section__text__up"]}>
                    <h3>Станьте первым тестировщиком нашей платформы</h3>
                    <p>Попробуйте Rumi первыми! Участвуйте в бета-тестировании и получите эксклюзивный доступ к новым возможностям – бесплатно!</p>
                </div>

                <div className={styles["survay-section__text__down"]}>
                    <p>⭐ 100+ пользователей уже тестируют</p>
                    <p>📩 Получите доступ в 1 клик</p>
                </div>
            </div>

            <div className={styles["survay-section__form"]}>
                <h3>Оставь заявку для участия в бета-тестировании</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Фамилия Имя</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Фамилия Имя" required />
                    
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                    
                    <div className={styles["checkbox-container"]}>
                        <input 
                            type="checkbox" 
                            id="form-checkbox"
                            name="subscribed"
                            checked={formData.subscribed}
                            onChange={handleChange}
                        />
                        <label htmlFor="form-checkbox">Подписаться на уведомления</label>
                    </div>
                    
                    <Button
                        style={{margin: '0 auto 0 0'}}
                        type='submit'
                    >
                        Отправить заявку
                    </Button>
                </form>
            </div>
        </section>
    );
};