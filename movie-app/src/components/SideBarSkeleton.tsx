import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonCircle,
} from "@chakra-ui/react";

const SideBarSkeleton = () => {
  return (
    <>
      <List paddingY="10px">
        <Skeleton height="20px" />
        <ListItem>
          <HStack>
            <SkeletonCircle size="10px" />
          </HStack>
        </ListItem>
      </List>
    </>
  );
};

export default SideBarSkeleton;
