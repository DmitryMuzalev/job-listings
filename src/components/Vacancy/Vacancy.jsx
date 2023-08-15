import { clsx } from 'clsx';
import classes from './Vacancy.module.scss';
import { FilterTablets } from './FilterTablets/FilterTablets';
import { Logo } from './Logo/Logo';
import { Content } from './Content/Content';

function Vacancy() {
  const data = {
    id: 4,
    company: 'MyHome',
    logo: './images/myhome.svg',
    new: false,
    featured: true,
    position: 'Junior Frontend Developer',
    role: 'Frontend',
    level: 'Junior',
    postedAt: '5d ago',
    contract: 'Contract',
    location: 'USA Only',
    languages: ['CSS', 'JavaScript'],
    tools: [],
  };

  const tablets = [data.role, data.level, ...data.languages, ...data.tools];

  const vacancy = clsx(classes.vacancy, data.featured && classes.featured);

  return (
    <div className={vacancy}>
      <div className={classes.vacancy__info}>
        <Logo image={data.logo} alt={data.company} />
        <Content data={data} />
      </div>
      <FilterTablets tablets={tablets} />
    </div>
  );
}
export { Vacancy };
