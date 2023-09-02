import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [showMore, setShowMore] = useState(false);
  if (!children) return null;
  const limit = 300;
  if (children.length <= limit) return <Text>{children}</Text>;

  return (
    <Text>
      {showMore ? children : children.substring(0, limit) + "..."}
      <Button
        marginLeft={2}
        size="xs"
        fontWeight="bold"
        onClick={() => setShowMore(!showMore)}
        colorScheme="yellow"
      >
        {showMore ? "Show Less" : "Show More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
