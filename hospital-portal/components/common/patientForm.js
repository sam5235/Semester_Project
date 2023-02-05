import {
  FormControl,
  Input,
  FormLabel,
  Grid,
  GridItem,
  Box,
  Button,
  Heading,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { RegisterPatient } from "../../firebase/patientServices";
import PasswordInput from "../Passwordinput";

const PatientForm = ({ addPatient }) => {
  const { onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [sex, setSex] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const handleOnClose = (patient) => {
    addPatient(patient);
    setIsLoading(false);
    toast({
      title: "Registered Successfully",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    setName("");
    setAddress("");
    setAge("");
    setEmail("");
    setHeight("");
    setPhone("");
    setPassword("");
    setWeight("");
    setSex("");
    onClose();
  };
  const onFail = () => {
    setIsLoading(false);
    toast({
      title: "Registration Fails",
      description: "Please fill again",
      status: "error",
      duration: 9000,
      isClosable: true,
    });
    onClose();
  };
  const handleOnAdd = () => {
    const List = {
      name,
      address,
      phone,
      age,
      sex,
      weight,
      height,
      email,
      password,
      history : []
    };
    setIsLoading(true);
    RegisterPatient(List, handleOnClose, onFail);
  };
  return (
    <Box
      sx={{ position: "sticky", top: "100px" }}
      boxShadow="dark-lg"
      bg={useColorModeValue("white", "gray.800")}
      p={6}
    >
      <Heading mb={3} size="md">
        Patient Registration
      </Heading>
      <FormControl mb={3}>
        <FormLabel fontSize="sm">Full Name</FormLabel>
        <Input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          border="solid"
          type="text"
        />
      </FormControl>
      <FormControl mb={3}>
        <FormLabel fontSize="sm">Email</FormLabel>
        <Input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          border="solid"
          type="email"
        />
      </FormControl>
      <FormControl mb={3}>
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <FormControl mb={3}>
        <FormLabel fontSize="sm">Phone</FormLabel>
        <Input
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          border="solid"
          type="number"
        />
      </FormControl>
      <FormControl mb={3}>
        <FormLabel fontSize="sm">Address</FormLabel>
        <Input
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          border="solid"
          type="text"
        />
      </FormControl>
      <Grid templateColumns="repeat(8, 1fr)" gap={4} mb={3}>
        <GridItem colSpan={4}>
          <FormControl mb={3}>
            <FormLabel fontSize="sm">Age</FormLabel>
            <Input
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
              border="solid"
              type="number"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={4}>
          <FormControl mb={3}>
            <FormLabel fontSize="sm">Sex</FormLabel>
            <Input
              value={sex}
              onChange={(e) => {
                setSex(e.target.value);
              }}
              border="solid"
              type="text"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={4}>
          <FormControl mb={3}>
            <FormLabel fontSize="sm">Height(cm)</FormLabel>
            <Input
              value={height}
              onChange={(e) => {
                setHeight(e.target.value);
              }}
              border="solid"
              type="number"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={4}>
          <FormControl mb={3}>
            <FormLabel fontSize="sm">Weight(g)</FormLabel>
            <Input
              value={weight}
              onChange={(e) => {
                setWeight(e.target.value);
              }}
              border="solid"
              type="number"
            />
          </FormControl>
        </GridItem>
      </Grid>
      <Button
        isLoading={isLoading}
        onClick={handleOnAdd}
        width="100%"
        colorScheme="brand"
      >
        Register
      </Button>
    </Box>
  );
};
export default PatientForm;
