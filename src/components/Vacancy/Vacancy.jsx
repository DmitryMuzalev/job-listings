import { clsx } from 'clsx';
import classes from './Vacancy.module.scss';
import { FilterTablets } from './FilterTablets/FilterTablets';
import { Logo } from './Logo/Logo';
import { Content } from './Content/Content';

function Vacancy({ data }) {
  const { role, level, languages, tools, featured, logo, company } = data;
  const tablets = [role, level, ...languages, ...tools];
  const vacancy = clsx(classes.vacancy, featured && classes.featured);

  return (
    <div className={vacancy}>
      <div className={classes.vacancy__info}>
        <Logo image={logo} alt={company} />
        <Content {...data} />
      </div>
      <FilterTablets tablets={tablets} />
    </div>
  );
}
export { Vacancy };
