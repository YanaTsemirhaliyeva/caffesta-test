import styles from './teste-item.module.scss';

export function TesteItem ({item}) {
  const {title, img, description} = item;
  return (
    <a className={styles['teste-item']} href='#' aria-label={`Go to ${title.toLowerCase()}`}>
      <img className={styles['teste-item__img']} src={img} alt={title} />
      <div className={styles['teste-item__text']}>
        <h3 className={styles['teste-item__title']}>{title}</h3>
        <p className={styles['teste-item__description']}>{description}</p>
      </div>
    </a>
  );
}
