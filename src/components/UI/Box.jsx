import clsx from "clsx";

function Box({ children, classes = [] }) {
  const boxClasses = clsx("box", ...classes);
  return <div className={boxClasses}>{children}</div>;
}
export { Box };
