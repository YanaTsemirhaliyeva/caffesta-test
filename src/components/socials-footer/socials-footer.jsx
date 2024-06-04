import { SOCIALS_FOOTER } from '../../const';
import { SocialItem } from '../social-item/social-item';
import styles from './socials-footer.module.scss';

export function SocialsFooter () {
  return (
    <ul className={styles['socials-footer']}>
      {SOCIALS_FOOTER.map((social) =>
        <li className={styles['socials-footer__item']} key={social.title.toLowerCase()}>
          <SocialItem item={social} />
        </li>
      )}
    </ul>
  );
}
