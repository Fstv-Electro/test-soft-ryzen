import { useState } from "react";
import styles from './faq.module.css';

export const FaqItem = ({ question, answer }) => {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={styles.faqItemContainer}>
            <button className={styles.faqBtn} type="button" onClick={toggleActive}>
                <span className={styles.statusQuestion}>{isActive ? '-' : '+'}</span>
                <div  className={styles.question}>
                    {question}
                    {isActive && <p  className={styles.answer}>{answer}</p>}
                </div>
            </button>
        </div>
    );
};