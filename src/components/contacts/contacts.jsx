import Mail from '../../../public/icons/Contacts-email.svg';
import Phone from '../../../public/icons/Contacts-phone.svg';
import Map from '../../../public/icons/Contacts-map.svg';
import Facebook from '../../../public/icons/Facebook.svg';
import Instagram from '../../../public/icons/Instagram.svg';
import Link from 'next/link';
import { Form } from '../form/form';

import styles from './contacts.module.css';


export const Contacts = () => {


    return (
        <div className={styles.container} id='contacts'>
            <h2 className={styles.title}>Contact Us</h2>

            <div className={styles.contactFormContainer}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <p className={styles.itemTitle}>Phone:</p>
                        <div className={styles.info}>
                            <div className={styles.contact}><Phone/> <Link href='tel:380981234567'>38 (098) 12 34 567</Link></div>
                            <div className={styles.contact}><Phone/> <Link href='tel:380931234567'>38 (093) 12 34 567</Link></div>
                        </div>
                    </li>
                    <li className={styles.item}>
                        <p className={styles.itemTitle}>E-mail:</p>
                        <div className={styles.info}>
                            <div className={styles.contact}><Mail/> <Link href='mailto:office@ecosolution.com'>office@ecosolution.com</Link></div>
                        </div>
                    </li>
                    <li className={styles.item}>
                        <p className={styles.itemTitle}>Address:</p>
                        <address className={styles.info}>
                            <div className={styles.contact}><Map/> <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p></div>
                        </address>
                    </li>
                    <li className={styles.socials}>
                        <p className={styles.itemTitle}>Social Networks:</p>
                        <div className={styles.socialInfo}>
                            <div className={styles.social}>
                                <Facebook/>
                            </div>
                            <div className={styles.social}>
                                <Instagram/>
                            </div>
                        </div>
                    </li>
                </ul>
                <Form/>
            </div>
        </div>
    )
}