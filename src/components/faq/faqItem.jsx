import styles from './faq.module.css';

export const FaqItem = ({ question, answer, index, handleCurrent, current }) => {
    const isOpen = current === index;

    return (
        <div className={styles.faqItemContainer}>
            <button className={styles.faqBtn} type="button" onClick={() => handleCurrent(index)}>
                <span className={styles.statusQuestion} style={{color: isOpen ? '#173D33' : '#97d28b'}}>{isOpen ? '-' : '+'}</span>
                <div  className={styles.question}>
                    {question}
                    {isOpen && <p  className={styles.answer}>{answer}</p>}
                </div>
            </button>
        </div>
    );
};