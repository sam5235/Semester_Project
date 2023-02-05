import {
  Flex,
  Box,
  Image,
  Button,
  Container,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  useColorMode,
  Avatar,
  Icon,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { GiHospitalCross } from "react-icons/gi";
import { useAuth } from "../context/AuthContext";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import PatientForm from "../components/common/patientForm";
import AddRecords from "../components/modals/AddRecordModal";
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { logout } = useAuth();
  const { isOpen: isForm, onOpen: openForm, onClose: closeForm } = useDisclosure();

  return (
    <Box
      bg={useColorModeValue("brand.400", "gray.800")}
      position="fixed"
      width="100%"
      zIndex={2}
      py={1}
    >
      <Container maxW="8xl">
        <Flex justifyContent="space-between" alignItems="center" px={3}>
          <Box rounded="full" bg="white" p={2}>
            <Image src="check-up.png" width="30px" />
          </Box>
          <Flex alignItems="center" justifyContent="space-between" width={450}>
            <Button
              leftIcon={<GiHospitalCross />}
              bg="white"
              boxShadow="2xl"
              color="brand.400"
              variant="solid"
              onClick={openForm}
            >
              Add Patient
            </Button>
            <Modal isOpen={isForm} onClose={closeForm}>
              <ModalOverlay />
              <ModalContent>
                <PatientForm />
              </ModalContent>
            </Modal>
            <AddRecords/>
            <Icon boxSize={6} onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Icon>
            <Menu>
              <MenuButton>
                <Avatar size={"md"} src="man.png" />
              </MenuButton>

              <MenuList
                display="flex"
                flexDirection="column"
                alignItems={"center"}
              >
                <Avatar size={"md"} src="man.png" />
                <Text py={3} color="brand.400" as="b">
                  Hospital Name
                </Text>
                <MenuItem>Settings</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
