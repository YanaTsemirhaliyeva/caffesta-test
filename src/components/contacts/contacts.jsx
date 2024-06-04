import { ContactPhone } from '../contact-phone/contact-phone';
import { ContactsSocials } from '../contacts-socials/contacts-socials';
import styles from './contacts.module.scss'

export function Contacts () {
  return (
    <div className={styles.contacts}>
      <ContactPhone />
      <ContactsSocials />
    </div>
  );
}
