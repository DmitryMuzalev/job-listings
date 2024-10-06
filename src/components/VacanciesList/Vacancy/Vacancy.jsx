import { clsx } from 'clsx';
import styles from './Vacancy.module.scss';
import { Logo } from './Logo/Logo';
import { Content } from './Content/Content';
import { Tablet } from './Tablet/Tablet';

function Vacancy({ data }) {
  const { role, level, languages, tools, featured, logo, company } = data;
  const tablets = [role, level, ...languages, ...tools];
  const vacancy = clsx(styles.vacancy, featured && styles.featured);

  return (
    <div className={vacancy}>
      <div className={styles.vacancy__info}>
        <Logo image={logo} alt={company} />
        <Content {...data} />
      </div>
      <div className={styles.vacancy__tablets}>
        {tablets.map((tablet, index) => (
          <Tablet key={index}>{tablet}</Tablet>
        ))}
      </div>
    </div>
  );
}
export { Vacancy };
