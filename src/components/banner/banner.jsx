import Link from 'next/link';
import ArrowRight from '../../../public/icons/Arrow-right.svg';
import Image from 'next/image';
import styles from './banner.module.css';

export const Banner = () => {
    return (
        <div className={styles.container} id='banner'>
            <div className={styles.banner}>
                <h1 className={styles.title}>RENEWABLE ENERGY FOR ANY TASK</h1>
                <div className={styles.bannerDesc}>
                    <p className={styles.desc}>Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass</p>
                    <Link href='#cases' className={styles.sectionLink}>Learn more <div className={styles.arrowContainer}><ArrowRight /></div></Link>
                </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.address}>
                <p className={styles.addressText}>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
                <Link href='mailto:office@ecosolution.com' className={styles.mail}>office@ecosolution.com</Link>
                <p className={styles.copyright}>ecosolution © 2023</p>
            </div>
            <div className={styles.imageContainer}>
                <Image src='/image/wind-turbine-banner.jpg' alt="wind-turbines-with-nature" fill />
            </div>
        </div>
    )
}