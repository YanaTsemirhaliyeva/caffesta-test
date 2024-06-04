import { Btn } from '../btn/btn';
import styles from './newsletter-form.module.scss';

export function NewsletterForm () {
  return (
    <form action='#' className={styles['newsletter-form']}>
      <div className={styles['newsletter-form__container']}>
        <label>
          <span className={styles['newsletter-form__title']}>Newsletter</span>
          <input className={styles['newsletter-form__input']} type='text' name='newsletter' />
        </label>
      </div>
      <Btn text='Send' type='submit' />
    </form>
  );
}
