import styles from './cases.module.css';

export const CasesCard = ({icon, title, desc}) => {
    return (
        <>
            <div className={styles.cardTitleContainer}>
            {icon}        
            <h3 className={styles.cardTitle}>{title}</h3>
            </div>
            <div className={styles.line}></div>
            <p className={styles.desc}>{desc}</p>
        </>
    )
}