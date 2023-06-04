import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Flex,
  FormControl,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import TimeSlot from "../forms/TimeSlot";
import { updateAppointment } from "../../firebase/appointmentService";

const AppointmentModal = ({ onClose = () => {}, appt }) => {
  const [maxPatients, setMaxPatients] = useState(appt.max_patients);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(appt.date);
  const [timeSlots, setTimeSlots] = useState([
    appt.start_time + " - " + appt.end_time,
  ]);

  const handleOnClose = () => {
    setSelectedDate("");
    setMaxPatients("");
    setIsLoading("");
    setTimeSlots([]);
    setIsLoading(false);
    onClose();
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleOnUpdate = async () => {
    setIsLoading(true);

    updateAppointment({
      ...appt,
      max_patients: maxPatients,
      date: selectedDate,
      start_time: timeSlots[0].slice(0, 8),
      end_time: timeSlots[0].slice(11, 19),
    }, handleOnClose);

   
  };

  return (
    <Card mt={5}>
      <CardBody>
        <Heading fontSize="md" mb="2">
          Update an Appointment{" "}
        </Heading>
        <FormControl>
          <Input
            placeholder="Maximum number of patient"
            value={maxPatients}
            onChange={(e) => setMaxPatients(e.target.value)}
          />
        </FormControl>
        <FormControl mt={4}>
          <div>
            <Text as="b">Select a Date</Text>
          </div>

          <Input
            type="date"
            id="date"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </FormControl>
        <TimeSlot
          setSelectedTimeSlots={setTimeSlots}
          selectedTimeSlots={timeSlots}
        />

        <Flex mt={5} justifyContent={"flex-end"}>
          <Button
            colorScheme="brand"
            isLoading={isLoading}
            onClick={handleOnUpdate}
          >
            Update
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default AppointmentModal;
