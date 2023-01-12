import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  Box,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { GiHospitalCross } from "react-icons/gi";
import PasswordInput from "../PasswordInput";

function HospitalRegister() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnAdd = () => {
    console.log({ name, address, type, email, password });
  };

  return (
    <>
      <Button onClick={onOpen}>
        <GiHospitalCross /> <Box ml={2}>Add Hospital</Box>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter="blur(10px)" bg="transparent" />
        <ModalContent>
          <ModalHeader>Add Health Care Center</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <Text fontSize="md" color="gray.500" mb="2">
              Basic Information
            </Text>

            <FormControl>
              <Input
                placeholder="Name of the center"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <Input
                placeholder="Address of the center"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <Select
                value={type}
                placeholder="Select type of center"
                onChange={(e) => setType(e.target.value)}
              >
                <option value="referal">Referal Hospital</option>
                <option value="hospital">Hospital</option>
                <option value="clinic">Clinic</option>
                <option value="lab">Laboratory</option>
                <option value="nursing">Nursing Home</option>
              </Select>
            </FormControl>

            <Text fontSize="md" color="gray.500" mt="4">
              Login Credential
            </Text>
            <Text fontSize="xs" mb="2" color="gray.400">
              The password should be changed after first login
            </Text>

            <FormControl>
              <Input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <PasswordInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="brand" onClick={handleOnAdd}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default HospitalRegister;
