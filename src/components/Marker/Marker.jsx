import classes from './Marker.module.scss';
import { clsx } from 'clsx';

function Marker({ type }) {
  const styles = clsx(
    classes.marker,
    type === 'new' && classes.new,
    type === 'featured' && classes.featured
  );

  return (
    <span className={styles}>
      {type}
      {type === 'new' ? '!' : ''}
    </span>
  );
}
export { Marker };
