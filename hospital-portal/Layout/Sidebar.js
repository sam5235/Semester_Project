import { Flex, Button, Box, Container, useColorModeValue } from "@chakra-ui/react";
import { IoIosPeople } from "react-icons/io";
import { HiHome } from "react-icons/hi";
import { BsSignpost2Fill, BsFillCalendar2CheckFill } from "react-icons/bs";

import { useRouter } from "next/router";
const Sidebar = ({ children }) => {
  const linkButtons = [
    { name: "Home", icon: <HiHome />, href: "/" },
    { name: "Patients", icon: <IoIosPeople />,  href:'/patients' },
    {name: 'Posts' ,icon : <BsSignpost2Fill /> ,href: '/posts'},
    {name: 'Appointments' , icon : <BsFillCalendar2CheckFill/>, href : '/appointments'}
  ];
  const router = useRouter();
  return (
    <Flex>
      <Flex
        direction="column"
        alignItems="start"
        position="fixed"
        boxShadow='dark-lg'
        height="100%"
        width="200px"
        bg={useColorModeValue("#f5f5f5", "gray.800")}
      >
        {linkButtons.map((link, index) => (
          <Button key={index} m={2} onClick={() => router.push(link.href)} boxShadow="dark-lg" leftIcon={link.icon}  bg={useColorModeValue("#f5f5f5", "gray.800")}>
          {link.name}
        </Button>
        ))} 
        

      </Flex>
     
        <Container  pl={200}  maxW="8xl">{children}</Container>
      
    </Flex>
  );
};
export default Sidebar;
