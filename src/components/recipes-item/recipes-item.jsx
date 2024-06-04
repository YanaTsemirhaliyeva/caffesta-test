import styles from './recipes-item.module.scss';

export function RecipesItem ({img}) {
  return (
    <img className={styles['recipes-img']} src={img} alt='Recipes picture' />
  );
}
