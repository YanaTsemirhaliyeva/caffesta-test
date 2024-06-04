import styles from './article-title.module.scss';

export function ArticleTitle ({title}) {
  return (
    <h2 className={styles['article-title']}>{title}</h2>
  );
}
