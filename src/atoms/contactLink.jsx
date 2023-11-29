import Link from 'next/link';
import Ellipse from '../../public/icons/Ellipse.svg';

export const ContactLink = ({ text, classLink, classText }) => {
    
    return (
        <Link href='/#contacts' className={classLink}><p className={classText}>{text}</p><Ellipse/></Link>
    )
}