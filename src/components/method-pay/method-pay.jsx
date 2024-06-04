import { PAY_METHOD } from '../../mocks';
import styles from './method-pay.module.scss';


export function MethodPay () {
  return (
    <ul className={styles['method-pay']}>
      {PAY_METHOD.map((item) => {
        return (
          <li key={item.title.toLowerCase()} className={styles['method-pay__item']}>
            <a href='#' className={styles['method-pay__link']} aria-label={`Pay with ${item.title.toLowerCase()}`}>
              <img src={item.img} alt='Pay method' />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
