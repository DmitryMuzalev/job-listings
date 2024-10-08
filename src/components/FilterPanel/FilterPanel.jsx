import { useAppContext } from "../../hook/useAppContext";
import { Box } from "../UI/Box";
import { List } from "../UI/List";
import { Tag } from "../UI/Tag";

function FilterPanel() {
  const { filters } = useAppContext();
  return (
    <Box classes={["filter-panel"]}>
      {!!filters.length && (
        <div className="filter-panel__body">
          <List>
            {filters.map((item, index) => (
              <Tag key={index} type="with-remove">
                {item}
              </Tag>
            ))}
          </List>
          <button onClick={() => {}}>Clear</button>
        </div>
      )}
    </Box>
  );
}
export { FilterPanel };
