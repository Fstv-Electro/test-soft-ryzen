import Link from 'next/link';
import Ellipse from '../../public/icons/Ellipse.svg';
import ArrowRight from '../../public/icons/Arrow-right.svg';

export const ContactLink = ({ text, classLink, classText, classIcon }) => {
    
    return (
        <Link href='/#contacts' className={classLink}><p className={classText}>{text}</p><div className={classIcon}><ArrowRight/></div></Link>
    )
}