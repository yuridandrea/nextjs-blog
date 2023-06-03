import Image from 'next/image';
import React from 'react';
import styles from './page.module.css';
import Button from '@/components/button/button';
const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src='/contact.png' fill={true} className={styles.image} />
        </div>
        <div className={styles.form}>
          <input type='text' placeholder='Name' className={styles.input} />
          <input type='email' placeholder='Email' className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder='Message'
            cols='30'
            rows='10'
          ></textarea>
          <Button url='#' text='Send' />
        </div>
      </div>
    </div>
  );
};

export default Contact;
