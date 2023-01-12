import { Container } from "@chakra-ui/react";
import Sidebar from "../layouts/Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Container maxW="8xl" pt={16}>
        <Sidebar>{children}</Sidebar>
      </Container>
    </div>
  );
};

export default Layout;
