import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import PasswordInput from "../PasswordInput";
import { createHealthCareCenter } from "../../firebase/healthServices";

const AddHealthcare = ({ onClose = () => {} }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleOnClose = () => {
    setIsLoading("");
    setName("");
    setAddress("");
    setType("");
    setEmail("");
    setPassword("");
    onClose();
  };

  const handleOnAdd = () => {
    const center = { name, address, type, email, password };
    setIsLoading(true);
    createHealthCareCenter(center, handleOnClose);
  };

  return (
    <Box>
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
      <Flex mt={5} justifyContent={"flex-end"}>
        <Button disabled={isLoading} variant="ghost" mr={3} onClick={onClose}>
          Cancel
        </Button>
        <Button colorScheme="brand" isLoading={isLoading} onClick={handleOnAdd}>
          Add
        </Button>
      </Flex>
    </Box>
  );
};

export default AddHealthcare;
