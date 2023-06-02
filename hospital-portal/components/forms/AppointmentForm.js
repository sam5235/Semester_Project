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
import TimeSlot from "./TimeSlot";

const AddHealthcare = ({ onClose = () => {} }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const handleOnClose = () => {
    setIsLoading("");
    setName("");
    setAddress("");
    setType("");
    setEmail("");
    setPassword("");
    onClose();
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleOnAdd = () => {
    const center = { name, address, type, email, password };
    setIsLoading(true);
  };

  return (
    <Box>
      <Text fontSize="md" mb="2">
        Fill Next Appointment{" "}
      </Text>
      <FormControl>
        <Input
          placeholder="Maximum number of patient"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl mt={4}>
        <div>
          <label htmlFor="">Select a Date</label>
        </div>

        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </FormControl>
      <TimeSlot />

      <Flex mt={5} justifyContent={"flex-end"}>
        <Button colorScheme="brand" isLoading={isLoading} onClick={handleOnAdd}>
          Add
        </Button>
      </Flex>
    </Box>
  );
};

export default AddHealthcare;
