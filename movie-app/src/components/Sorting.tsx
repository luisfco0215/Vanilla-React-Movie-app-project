import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedOrder: string;
  onSelectedOrder: (category: string) => void;
}

const Sorting = ({ selectedOrder, onSelectedOrder }: Props) => {
  const sortOders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const [{ label }] = sortOders.filter(
    (order) => order.value === selectedOrder
  );

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order by: {label || "Relevance"}
        </MenuButton>
        <MenuList>
          {sortOders.map((order) => {
            return (
              <MenuItem
                onClick={() => onSelectedOrder(order.value)}
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
