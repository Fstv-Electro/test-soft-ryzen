import { Logo } from '@/atoms/logo';
import Burger from '../../../public/icons/Menu.svg';
import { ContactLink } from '../../atoms/contactLink';
import { useGlobalContext } from '@/store/Context';

import styles from './header.module.css';

export const Header = () => {
    const { toggleModal } = useGlobalContext();

    return (
        <header className={styles.header}>
            <Logo isHeader={true}/>
            <nav className={styles.navContainer}>
                <button className={styles.navMenuBtn} onClick={(e) => toggleModal(e)}><Burger/></button>
                <ContactLink text={'Get in touch'} classLink={styles.contactsLink} classText={styles.linkText} classIcon={styles.icon}/>
            </nav>
        </header>
    )
};