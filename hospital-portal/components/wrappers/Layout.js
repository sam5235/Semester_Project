import Sidebar from "../../Layout/Sidebar";
import Navbar from "../../Layout/Navbar";
import { Box,  useColorModeValue } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Box bg={useColorModeValue('#f5f5f5', 'gray.900')}>
      <Navbar />
      <Box pt="56px">
        <Sidebar>{children}</Sidebar>
      </Box>
    </Box>
  );
};
export default Layout;
