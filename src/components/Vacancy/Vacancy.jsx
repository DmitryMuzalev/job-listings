import { clsx } from 'clsx';
import { FilterTablet } from '../FilterTablet/FilterTablet';
import { Marker } from '../Marker/Marker';
import classses from './Vacancy.module.scss';

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

  const tablets = [data.role, data.level, ...data.languages, ...data.tools].map(
    (t) => <FilterTablet>{t}</FilterTablet>
  );

  const vacancy = clsx(classses.vacancy, data.featured && classses.featured);

  return (
    <div className={vacancy}>
      <div className={classses.info}>
        <img src={data.logo} alt={data.company} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '.6rem',
          }}
        >
          <div className={classses.infoHeader}>
            <p className={classses.companyName}>{data.company}</p>
            <div className={classses.markers}>
              <Marker text="new" />
              <Marker text="featured" />
            </div>
          </div>
          <a href="#position" className={classses.position}>
            {data.position}
          </a>
          <p className={classses.conditions}>
            {data.postedAt} &#8226; {data.contract} &#8226; {data.location}
          </p>
        </div>
      </div>
      <div className={classses.tablets}>{tablets}</div>
    </div>
  );
}
export { Vacancy };
