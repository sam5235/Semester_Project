import { Text, Flex, Box, Center } from "@chakra-ui/react";
import Records from "../../components/RecordsTimeLine";
import { useRouter } from "next/router"
import { getPatientById } from "../../firebase/patientServices";
import { useEffect, useState } from "react";

const SingleRecord = () => {
    const [patient, setPatient] = useState({});
    const router = useRouter();
    const id = router.query.id;
    const fetchPatient = async () => {
        setPatient(await getPatientById(id));
        console.log(patient);
    }
    useEffect(() => {
        fetchPatient();
    }, []);

    return (
        <Box>
            <Center>
                <Box mt={5}>

                    <Flex ><Text color="blue.400" fontSize='3xl' as='b'>General Information</Text></Flex>
                    <Flex>
                        <Text fontSize='md' as='b'>
                            Name:
                        </Text>
                        <Text ml={3} as="samp">{patient.name}</Text>
                    </Flex>
                    <Flex>
                        <Text fontSize='md' as='b'>
                            Phone:
                        </Text>
                        <Text ml={3} as="samp">{patient.phone}</Text>
                    </Flex>
                    <Flex>
                        <Text fontSize='md' as='b'>
                            Address:
                        </Text>
                        <Text ml={3} as="samp">{patient.address}</Text>
                    </Flex>
                    <Flex>
                        <Text fontSize='md' as='b'>
                            Sex:
                        </Text>
                        <Text ml={3} as="samp">{patient.sex}</Text>
                    </Flex>
                    <Flex><Text color="blue.400" fontSize='3xl' as='b'>Specific Information</Text></Flex>
                    <Flex>
                        <Text fontSize='md' as='b'>
                            Age:
                        </Text>
                        <Text ml={3} as="samp">{patient.age}</Text>
                    </Flex><Flex>
                        <Text fontSize='md' as='b'>
                            Height:
                        </Text>
                        <Text ml={3} as="samp">{patient.height} CM</Text>
                    </Flex><Flex>
                        <Text fontSize='md' as='b'>
                            Weight:
                        </Text>
                        <Text ml={3} as="samp">{patient.weight} Kg</Text>
                    </Flex>

                </Box>
            </Center>
            <Center>

                <Text color="blue.400" fontSize='3xl' as='b'>Hospital Records</Text>
            </Center>
            <Records id={id} />
        </Box>

    );
}

export default SingleRecord;