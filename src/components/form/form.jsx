'use client'
import { useForm } from 'react-hook-form';
import ArrowRight from '../../../public/icons/Arrow-right.svg';
import styles from './form.module.css';

export const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
        console.log("User submit data ", data);
    }

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formItem}>
                <label className={styles.label}>* Full name:</label>
                <input type="text" {...register('fullname', {required: true, pattern: /^[A-Za-z]+$/i})} placeholder='John Rosie' className={styles.input} style={{ borderColor: errors.fullname ? '#D28B8B' : '#97d28b'}}/>
                {errors.fullname && <span>Wrong Fullname</span>}
            </div>
            <div className={styles.formItem}>
                <label className={styles.label}>* E-mail:</label>
                <input type="mail" {...register('email', {required: true, pattern: /^\S+@\S+$/i})} placeholder='johnrosie@gmail.com' className={styles.input} style={{ borderColor: errors.email ? '#D28B8B' : '#97d28b'}}/>
                {errors.email && <span>Wrong Email</span>}
            </div>
            <div className={styles.formItem}>
                <label className={styles.label}>* Phone:</label>
                <input type="tel" {...register('phone', {required: true, pattern: /^[0-9]{10}$/})} placeholder='380961234567' className={styles.input} style={{ borderColor: errors.phone ? '#D28B8B' : '#97d28b'}}/>
                {errors.phone && <span>Wrong Phone</span>}
            </div>
            <div className={styles.formItem}>
                <label className={styles.label}>Message:</label>
                <textarea {...register('message')} placeholder='Your message' className={styles.input} style={{ height: '147px', resize: 'none'}}/>
            </div>
            <button type='submit' className={styles.btn}>Send <ArrowRight/></button>
        </form>
    )
}