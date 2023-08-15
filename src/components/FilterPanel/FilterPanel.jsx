import { TabletActive } from '../TabletActive/TabletActive';
import classes from './FilterPanel.module.scss';

function FilterPanel() {
  return (
    <div className={classes.filter}>
      <TabletActive />
    </div>
  );
}
export { FilterPanel };
