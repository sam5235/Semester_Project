import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getAppointment } from "../../firebase/appointmentService";
import AppointmentModal from "../modals/AppointmentModal";

function AppointmentCard() {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppnt, setSelectedAppnt] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOnEdit = (appnt) => {
    setSelectedAppnt(appnt);
    onOpen();
  };

  const fetchAppointments = async () => {
    setAppointments(await getAppointment());
    return appointments;
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <AppointmentModal onClose={onClose} appt={selectedAppnt} />
        </ModalContent>
      </Modal>
      {appointments.map((appointment, index) => {
        return (
          <Card key={index} width="100%" height="100px" my={5}>
            <CardBody>
              <Flex justifyContent="space-evenly" alignItems="center">
                <Image src="man.png" width="40px" />
                <Button onClick={() => handleOnEdit(appointment)}>Edit</Button>
                <Flex direction="column" mx={3}>
                  <Text as="b">{appointment.max_patients}</Text>
                  <Text as="b">Patients</Text>
                </Flex>
                <Flex direction="column" mx={3}>
                  <Text as="b">
                    {appointment.start_time} - {appointment.end_time}
                  </Text>
                  <Text as="b">Time</Text>
                </Flex>
              </Flex>
            </CardBody>
          </Card>
        );
      })}
    </Box>
  );
}

export default AppointmentCard;
