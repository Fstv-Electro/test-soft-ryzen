import Link from 'next/link';
import ArrowRight from '../../public/icons/Arrow-right.svg';

export const ContactLink = ({ text, classLink, classText, classIcon }) => {
    
    return (
        <Link href='/#contacts' className={classLink}><p className={classText}>{text}</p><div className={classIcon}><ArrowRight/></div></Link>
    )
}