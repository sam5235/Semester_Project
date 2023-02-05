import {
  Card,
  CardBody,
  CardFooter,
  Text,
  Button,
  Grid,
  GridItem,
  Box,
  useColorModeValue,
  Avatar,
  Badge,
  Divider,
  Stack,
  Heading,
  ButtonGroup,
  Center,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import PatientForm from "../components/common/patientForm";
import { getPatients, filterPatients } from "../firebase/patientServices";
import SearchBar from "../components/common/searchBar";

const Patients = () => {
  const [patient, setPatients] = useState([]);
  const [value, setValue] = useState("");

  const filter = async () => {
    console.log(value);
    const Lists = await filterPatients(value);
    setPatients(Lists);
  };
  const fetchPatients = async () => {
    const Lists = await getPatients();
    setPatients(Lists);
  };
  const addPatient = (p) => {
    if (p !== undefined) setPatients([...patient, p]);
  };

  const handleChanges = (e) => {
      setValue(e.target.value);
      if (e.target.value === "") fetchPatients();
  };
  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <Box m={10}>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={4}
        mb={20}
      >
        <GridItem colSpan="4">
          <Box width="50%" position="fixed" zIndex={2}>
            <SearchBar
              onChange={handleChanges}
              value={value}
              filter={filter}
            />
          </Box>
        </GridItem>
      </Grid>

      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(12, 1fr)"
        gap={4}
      >
        <GridItem colSpan={9}>
          <Grid gap={4} templateColumns="repeat(6, 1fr)">
            {patient.map((user) => (
              <GridItem key={user.id} colSpan="2">
                <Card
                  boxShadow="dark-lg"
                  bg={useColorModeValue("white", "gray.800")}
                  maxW="sm"
                >
                  <CardBody>
                    <Center>
                      <Avatar size="lg" mb={3} src="" name={user.name} />
                    </Center>
                    <Stack direction="row">
                      {user.history.map((field) => (
                        <Badge colorScheme="red">{field}</Badge>
                      ))}
                    </Stack>
                    <Divider />
                    <Stack mt="6" spacing="3">
                      <Heading color="brand.400" size="md">
                        {user.name}
                      </Heading>

                      <Text>
                        <Text as="b" fontSize="sm">
                          Age:
                        </Text>{" "}
                        <Text as="b" fontSize="xs">
                          {user.age}
                        </Text>
                      </Text>
                      <Text>
                        <Text as="b" fontSize="sm">
                          Med-Id:
                        </Text>{" "}
                        <Text as="b" fontSize="xs">
                          {user.medid}
                        </Text>
                      </Text>
                      <Text>
                        <Text as="b" fontSize="sm">
                          Phone:
                        </Text>{" "}
                        <Text as="b" fontSize="xs">
                          {user.phone}
                        </Text>
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <ButtonGroup spacing="2">
                      <Button colorScheme="brand" size="xs">
                        Add Records
                      </Button>
                      <Button size="xs" colorScheme="brand">
                        View Detail
                      </Button>
                      <Button size="xs" colorScheme="brand">
                        Edit
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              </GridItem>
            ))}
          </Grid>
        </GridItem>

        <GridItem colSpan={3}>
          <PatientForm addPatient={addPatient} />
        </GridItem>
      </Grid>
    </Box>
  );
};
export default Patients;
