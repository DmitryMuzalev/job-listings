import { Tablet } from './Tablet/Tablet';
import classes from './FilterTablets.module.scss';

function FilterTablets({ tablets }) {
  return (
    <div className={classes.tablets}>
      {tablets.map((t, i) => (
        <Tablet key={i}>{t}</Tablet>
      ))}
    </div>
  );
}
export { FilterTablets };
