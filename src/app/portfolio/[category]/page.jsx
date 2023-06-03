import Button from '@/components/Button/Button';
import Image from 'next/image';
import React from 'react';
import styles from './page.module.css';

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>description</p>
          <Button text='See more' url='#' />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/15885269/pexels-photo-15885269/free-photo-of-legno-citta-strada-edificio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            fill={true}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>description</p>
          <Button text='See more' url='#' />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/15885269/pexels-photo-15885269/free-photo-of-legno-citta-strada-edificio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            fill={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
