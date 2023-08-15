import { Marker } from '../Marker/Marker';
import classes from '../Vacancy.module.scss';

function Content({ data }) {
  return (
    <div className={classes.vacancy__content}>
      <div className={classes.vacancy__title}>
        <h2>{data.company}</h2>
        <div>
          <Marker text="new" />
          <Marker text="featured" />
        </div>
      </div>
      <a href="#vacancy">{data.position}</a>
      <p>
        {data.postedAt} &#8226; {data.contract} &#8226; {data.location}
      </p>
    </div>
  );
}
export { Content };
