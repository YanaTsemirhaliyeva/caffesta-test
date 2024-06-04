import { CONTACT_PHONE } from '../../const';
import styles from './contact-phone.module.scss'

export function ContactPhone () {
  return (
    <a
      href={`tel:${CONTACT_PHONE}`}
      className={styles['contact-phone']}
      aria-label='Сontact the company'
    >
      <img src='img/icons/icon-phone.svg' alt='Contact the company by phone number' />
      <p>+{CONTACT_PHONE}</p>
    </a>
  );
}
