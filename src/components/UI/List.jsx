import clsx from "clsx";

function List({ children, classes = [] }) {
  const listClasses = clsx("list", ...classes);

  return <div className={listClasses}>{children}</div>;
}
export { List };
