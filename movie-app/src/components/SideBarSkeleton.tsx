import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const SideBarSkeleton = () => {
  return (
    <>
      <List>
        <Skeleton height="20px" />
        <ListItem>
          <HStack>
            <SkeletonCircle size="10" />
            <SkeletonText />
          </HStack>
        </ListItem>
      </List>
    </>
  );
};

export default SideBarSkeleton;
