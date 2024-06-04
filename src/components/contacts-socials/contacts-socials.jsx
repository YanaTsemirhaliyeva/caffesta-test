import { SOCIALS_NAV } from '../../const';
import { SocialItem } from '../social-item/social-item';
import styles from './contacts-socials.module.scss';

export function ContactsSocials () {
  return (
    <ul className={styles['contacts-socials']}>
      {SOCIALS_NAV.map((social) =>
        <li key={social.title.toLowerCase()} className={styles['contacts-socials__item']}>
          <SocialItem item={social} />
        </li>
      )}
    </ul>
  );
}
