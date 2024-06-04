import { HOME_LIST } from '../../const';
import { LinksList } from '../links-list/links-list';
import { LogoMd } from '../logo-md/logo-md';
import { MethodPay } from '../method-pay/method-pay';
import { NewsletterForm } from '../newsletter-form/newsletter-form';
import { SocialsFooter } from '../socials-footer/socials-footer';
import styles from "./footer.module.scss";

export function Footer () {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer__container']}>
        <div className={styles['footer__logo']}>
          <LogoMd />
        </div>
        <div className={styles['footer__content']}>
          <div className={styles['footer__text']}>
            <p className={styles['footer__description']}>
              It is a long established fact that a be distracted by the readable when looking at its layout.
            </p>
            <div className={styles['footer__socials']}>
              <p className={styles['footer__socials-title']}>Follow us</p>
              <div className={styles['footer__socials-links']}>
                <SocialsFooter />
              </div>
            </div>
          </div>
          <div className={styles['footer__links']}>
            <LinksList list={HOME_LIST} />
          </div>
          <div className={styles['footer__right-column']}>
            <NewsletterForm />
            <MethodPay />
          </div>
        </div>
      </div>
    </footer>
  );
}
