import styles from './FaqItem.module.scss';
import { FaqItemProps } from './types.ts';
import { useState } from 'react';

export const FaqItem = ({ question, children }: FaqItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`${styles['faq-item']} ${isOpen ? styles['open'] : ''}`}>
            <div
                className={styles['faq-question']}
                onClick={toggleAccordion}
                aria-expanded={isOpen}
            >
                <span className={styles['question-text']}>{question}</span>
                <span className={styles['icon']}>
                    <svg
                        className={`${styles.arrow} ${isOpen ? styles.openArrow : ''}`}
                        width="20"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M6 9l6 6 6-6" />
                    </svg>
                </span>
            </div>
            {isOpen && (
                <div className={styles['faq-answer']} aria-hidden={!isOpen}>
                    <p>{children}</p>
                </div>
            )}
        </div>
    );
};