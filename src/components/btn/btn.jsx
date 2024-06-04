import styles from './btn.module.scss';


export function Btn ({text, type}) {
  return (
    <button className={styles.btn} type={type} aria-label={text}>
      {text}
    </button>
  );
}
