import { Marker } from '../Marker/Marker';
import styles from '../Vacancy.module.scss';

function Content({ company, position, postedAt, contract, location, ...data }) {
  const [isNew, isFeatured] = [data.new, data.featured];
  return (
    <div className={styles.vacancy__content}>
      <div className={styles.vacancy__title}>
        <h2>{company}</h2>
        <div>
          {isNew && <Marker text="new" />}
          {isFeatured && <Marker text="featured" />}
        </div>
      </div>
      <a href="#vacancy">{position}</a>
      <p>
        {postedAt} &#8226; {contract} &#8226; {location}
      </p>
    </div>
  );
}
export { Content };
