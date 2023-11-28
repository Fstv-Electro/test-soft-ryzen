import Link from 'next/link';
import ArrowRight from '../../../public/icons/Arrow-right.svg';
import Image from 'next/image';
import styles from './banner.module.css';

export const Banner = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>RENEWABLE ENERGY FOR ANY TASK</h1>
            <p className={styles.desc}>Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass</p>
            <Link href='#cases' className={styles.sectionLink}>Learn more <div className={styles.arrowContainer}><ArrowRight /></div></Link>
            <div className={styles.line}></div>
            <address >
                <p className={styles.addressText}>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
                <Link href='mailto:office@ecosolution.com' className={styles.addressText}>office@ecosolution.com</Link>
            </address>
            <div className={styles.imageContainer}>
                <Image src='/image/wind-turbine-banner.jpg' alt="wind-turbines-with-nature" fill />
            </div>
        </div>
    )
}