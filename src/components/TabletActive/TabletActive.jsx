import classes from './TabletActive.module.scss';

function TabletActive() {
  return (
    <div className={classes.tabletActive}>
      <p>Frontend</p>
      <span>
        <img src="./images/icon-remove.svg" alt="remove" />
      </span>
    </div>
  );
}
export { TabletActive };
