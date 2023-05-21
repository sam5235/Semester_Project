import {
  Text,
  Button,
  Grid,
  GridItem,
  Box,
  useColorModeValue,
  Avatar,
  Badge,
  Stack,
  Heading,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import PatientForm from "../components/common/patientForm";
import { getPatients, filterPatients } from "../firebase/patientServices";
import SearchBar from "../components/common/searchBar";
import RecordForm from "../components/common/recordForm";
import { useRouter } from "next/router";
import {useDispatch, useSelector} from 'react-redux'
import { addPatients,addPatient as addSinglePatient } from "../redux/actions";

const Patients = () => {
  const dispatch = useDispatch();
 const patients = useSelector(store => store.patientsPage);
  const router = useRouter();
  const [selected, setSelected] = useState();
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const backColor = useColorModeValue('white', 'gray.900');
  const badgeColor = useColorModeValue('gray.50', 'gray.800');
  const setPatients = (List) =>{
    return dispatch(addPatients(List));
  }
  const filter = async () => {
    setIsLoading(true);
    const Lists = await filterPatients(value);
    Lists && setIsLoading(false);
    setPatients(Lists);
  };
  const fetchPatients = async () => {
    setIsLoading(true);
    const Lists = await getPatients();
    Lists && setIsLoading(false);
    setPatients(Lists);

  };
  
  const handleChanges = (e) => {
    setValue(e.target.value);
    if (e.target.value === "") fetchPatients();
  };

  const sortedPatients = patients.sort((a,b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

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
              isLoading={isLoading}
            />
          </Box>
        </GridItem>
      </Grid>

      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(12, 1fr)"
        height="1200px"
        gap={4}
      >
        <GridItem colSpan={9} height="2000px">
          <Grid gap={4} templateColumns="repeat(6, 1fr)">
            {sortedPatients.map((user, index) => (
              <GridItem key={index} colSpan="2">
                <Center pb={6}>
                  <Box
                    maxW={'320px'}
                    w={'full'}
                    bg={backColor}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    p={6}
                    textAlign={'center'}>
                    <Avatar
                      size={'xl'}
                      src=""
                      name={user.name}
                      mb={4}
                    />
                    <Heading fontSize={'2xl'} fontFamily={'body'} textTransform="capitalize">
                      {user.name}
                    </Heading>
                    <Text fontWeight={600} color={'gray.500'} mb={4}>
                      {user.phone}
                    </Text>

                    <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                      {user.history.map((field, index) => (
                        <Badge key={index}
                          px={2}
                          py={1}
                          bg={badgeColor}
                          fontWeight={'400'}>{field}</Badge>
                      ))}
                    </Stack>

                    <Stack mt={8} direction={'row'} spacing={4}>
                      <Button
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        onClick={() => setSelected(user)}
                        _focus={{
                          bg: 'gray.200',
                        }}>
                        Add Record
                      </Button>
                      <Button
                        onClick={() => { router.push(`/records/${user.id}`) }}
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        bg={'blue.400'}
                        color={'white'}
                        boxShadow={
                          '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                        }
                        _hover={{
                          bg: 'blue.500',
                        }}
                        _focus={{
                          bg: 'blue.500',
                        }}>
                        View Detail
                      </Button>
                    </Stack>
                  </Box>
                </Center>
              </GridItem>
            ))}
          </Grid>
        </GridItem>

        <GridItem colSpan={3}>
          <PatientForm  />
        </GridItem>
      </Grid>
      <Modal isOpen={Boolean(selected)} onClose={() => setSelected()}>
        <ModalOverlay />
        <ModalContent>
          {Boolean(selected) && (
            <RecordForm patient={selected} onCancel={() => setSelected()} />
          )}
        </ModalContent>
      </Modal>
    </Box>
  );
};
export default Patients;
