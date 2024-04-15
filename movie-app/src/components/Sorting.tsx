import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameStore from "../store/gameStore";


const Sorting = () => {
  const sortOders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const { setSortOrder, gameQuery } = useGameStore();
  const sorted = sortOders.find((order) => order.value === gameQuery.sortOrder);

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order by: {sorted?.label || "Relevance"}
        </MenuButton>
        <MenuList>
          {sortOders.map((order) => {
            return (
              <MenuItem
                onClick={() => setSortOrder(order.value)}
                value={order.value}
                key={order.value}
              >
                {order.label}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </>
  );
};

export default Sorting;
