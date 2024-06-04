import styles from './blog-item.module.scss';

export function BlogItem ({item}) {
  return (
    <div className={styles['blog-item']}>
      <div className={styles['blog-item__quotes']}>
        <img src='img/blog/quotes.svg' alt='Quotes' />
      </div>
      <div className={styles['blog-item__content']}>
        <div className={styles['blog-item__img-wrapper']}>
          <img className={styles['blog-item__img']} src={item.img} alt={`${item.title} picture`} />
        </div>
        <div>
          <h3 className={styles['blog-item__title']}>{item.title}</h3>
          <p className={styles['blog-item__description']}>{item.description}</p>
        </div>
      </div>
      <div className={styles['blog-item__quotes--end']}>
        <img src='img/blog/quotes-end.svg' alt='Quotes' />
      </div>
    </div>
  );
}
