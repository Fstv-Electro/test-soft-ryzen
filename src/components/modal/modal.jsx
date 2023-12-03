import { useGlobalContext } from "@/store/Context"
import Link from 'next/link';
import Facebook from '../../../public/icons/Facebook.svg';
import Instagram from '../../../public/icons/Instagram.svg';
import ArrowRight from '../../../public/icons/Arrow-right.svg';
import Close from '../../../public/icons/Closemenu.svg'
import styles from './modal.module.css';

export const ModalMenu = () => {
    const { isOpen, toggleModal, modalPosition, currentSection, closeModal } = useGlobalContext();

    // зробити current section

    return (
        <>
            {isOpen && (
                <div className={styles.backdrop}>
                    <div className={styles.modal} style={{top: `${modalPosition}px`}}>
                        <button className={styles.modalBtnClose} onClick={(e) => toggleModal(e)}><Close/> close</button>
                        <div className={styles.modalLine}></div>
                        <div className={styles.modalNavContainer}>
                            <nav className={styles.modalNav}>
                                <Link href='/#main' className={currentSection === 'main' ? styles.current : styles.modalLink}  onClick={() => closeModal()}>Main <div className={styles.icon}><ArrowRight /></div></Link>
                                <Link href='/#about' className={currentSection === 'about' ? styles.current : styles.modalLink} onClick={() => closeModal()}>About <div className={styles.icon}><ArrowRight /></div></Link>
                                <Link href='/#cases' className={currentSection === 'cases' ? styles.current : styles.modalLink} onClick={() => closeModal()}>Cases <div className={styles.icon}><ArrowRight /></div></Link>
                                <Link href='/#faq' className={currentSection === 'faq' ? styles.current : styles.modalLink} onClick={() => closeModal()}>FAQ <div className={styles.icon}><ArrowRight /></div></Link>
                                <Link href='/#contacts' className={currentSection === 'contacts' ? styles.current : styles.modalLink} onClick={() => closeModal()}>Contact Us <div className={styles.icon}><ArrowRight /></div></Link>
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