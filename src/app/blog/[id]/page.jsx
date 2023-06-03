import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 10 },
  });
  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const Post = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            minima officiis ipsam molestiae voluptatem doloribus blanditiis
            provident dolore repudiandae vitae sit dolorum deserunt temporibus
            nulla quis consequuntur repellat quo harum! Laudantium ut iste, hic
            et fugit dolor tenetur cumque magnam eveniet id porro quas dolorem
            in eius autem sunt. Officiis?
          </p>
          <div className={styles.author}>
            <Image
              src='https://images.pexels.com/photos/16628785/pexels-photo-16628785/free-photo-of-moda-amore-donna-scuro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt=''
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Franco</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/15940872/pexels-photo-15940872/free-photo-of-gatto-lunare.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.body}</p>
      </div>
    </div>
  );
};

export default Post;
