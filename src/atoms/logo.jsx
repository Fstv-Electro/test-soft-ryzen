import { useGlobalContext } from '@/store/Context';
import LogoIcon from '../../public/icons/Logo.svg';
import styles from './logo.module.css';


export const Logo = ({isHeader}) => {
    const { currentSection } = useGlobalContext();

    return (
        <div className={styles.logoContainer}>
            <LogoIcon />
            <p className={currentSection !== null  && isHeader ? styles.logoActiveText : styles.logoText}>ecosolution</p>
            <div className={styles.textGreenEnergy}><p><span className={styles.textGreen}>green</span>enry</p>for life</div>
        </div>
    )
}