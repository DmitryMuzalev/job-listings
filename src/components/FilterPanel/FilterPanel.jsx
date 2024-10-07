import { useAppContext } from "../../hook/useAppContext";
import { Box } from "../UI/Box/Box";
import { List } from "../UI/List/List";
import { Tag } from "../UI/Tag/Tag";

function FilterPanel() {
  const { filters } = useAppContext();
  return (
    <Box className="filter-panel">
      {!!filters.length && (
        <div>
          <List>
            {filters.map((item, index) => (
              <Tag key={index}>{item}</Tag>
            ))}
          </List>
          <button onClick={() => {}}>Clear</button>
        </div>
      )}
    </Box>
  );
}
export { FilterPanel };
