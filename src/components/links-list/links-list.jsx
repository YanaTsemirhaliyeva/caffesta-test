import styles from './links-list.module.scss';

export function LinksList ({list}) {
  return (
    <div className={styles['links-list']}>
      <p className={styles['links-list__title']}>
        {list.title}
      </p>
      {list.list &&
        <ul className={styles['links-list__list']}>
        {list.list.map((item, i) => {
          return (
            <li className={styles['links-list__item']} key={i}>{item}</li>
          );
        })}
        </ul>
      }
    </div>
  );
}
