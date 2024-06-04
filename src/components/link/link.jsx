import styles from './link.module.scss';


export function Link ({text}) {
  return (
    <a href='#' className={styles.link} aria-label={text}>
      {text}
    </a>
  );
}
