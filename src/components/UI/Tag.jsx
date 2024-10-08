//_Utils:
import { clsx } from "clsx";

//_Images:

import RemoveIcon from "../../assets/images/icon-remove.svg";

function Tag({ type = "default", bg = "light", children, onClear, onClick }) {
  const tagClasses = clsx("tag", `tag_${type}`, `tag_${bg}`);

  return (
    <div className={tagClasses} onClick={onClick}>
      <span>{children}</span>
      {type === "with-remove" && (
        <div className={"tag__remove-btn"} onClick={onClear}>
          <img src={RemoveIcon} alt="remove" />
        </div>
      )}
    </div>
  );
}
export { Tag };
