import { useGlobalContext } from "@/store/Context"
import Link from 'next/link';
import Facebook from '../../../public/icons/Facebook.svg';
import Instagram from '../../../public/icons/Instagram.svg';
import { GoArrowUpRight } from "react-icons/go";
import Close from '../../../public/icons/Closemenu.svg'
import styles from './modal.module.css';

export const Modal = () => {
    const { isOpen, toggleModal, modalPosition } = useGlobalContext();

    return (
        <>
            {isOpen && (
                <div className={styles.backdrop}>
                    <div className={styles.modal} style={{top: `${modalPosition}px`}}>
                        <button className={styles.modalBtnClose} onClick={(e) => toggleModal(e)}><Close/> close</button>
                        <div className={styles.modalLine}></div>
                        <div className={styles.modalNavContainer}>
                            <nav className={styles.modalNav}>
                            <Link href='/#main' className={styles.modalLink}>Main <GoArrowUpRight /></Link>
                            <Link href='/#about' className={styles.modalLink}>About <GoArrowUpRight /></Link>
                            <Link href='/#cases' className={styles.modalLink}>Cases <GoArrowUpRight /></Link>
                            <Link href='/#faq' className={styles.modalLink}>FAQ <GoArrowUpRight /></Link>
                            <Link href='/#contacts' className={styles.modalLink}>Contact Us <GoArrowUpRight /></Link>
                            </nav>
                            <div className={styles.modalSocials}>
                                <Facebook />
                                <Instagram />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
};