import { Flex, Icon, Text } from "@chakra-ui/react";
import { IoConstructOutline } from "react-icons/io5";

const AppointmentPage = () => {
  return (
    <Flex
      h="100%"
      minH="95vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Icon as={IoConstructOutline} fontSize="8xl" />
      <Text>Coming Soon!</Text>
    </Flex>
  );
};

export default AppointmentPage;
