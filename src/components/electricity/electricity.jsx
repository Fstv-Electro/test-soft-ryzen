import styles from './electricity.module.css';

export const Electricity = () => {

    return (
        <div className={styles.attentionContainer}>
            <h2 className={styles.attentionTitle}>Electricity we produced for all time</h2>
            <div className={styles.verticalLine}></div>
            <p className={styles.attentionDesc}><span className={styles.attentionNumbers}>1.134.147.814</span> kWh</p>
        </div>
    )
}