import { HStack, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreItemSkeleton = () => {
  return (
    <ListItem paddingY={1}>
      <HStack alignItems="center">
        <Skeleton height="32px" width="32px" />
        <SkeletonText noOfLines={1} skeletonHeight="4" width="80%" />
      </HStack>
    </ListItem>
  );
};

export default GenreItemSkeleton;
