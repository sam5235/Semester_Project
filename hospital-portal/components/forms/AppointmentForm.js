import { useState } from "react";
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
import TimeSlot from "./TimeSlot";
import { createAppointment } from "../../firebase/appointmentService";

const AppointmentForm = ({ onClose = () => {} }) => {
  const [maxPatients, setMaxPatients] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState([]);

  const handleOnClose = () => {
    setSelectedDate("");
    setMaxPatients("");
    setIsLoading("");
    setTimeSlot([]);
    onClose();
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleOnAdd = async () => {
    for (const index in timeSlot) {
      const appnt = {
        startTime: timeSlot[index].slice(0, 8),
        endTime: timeSlot[index].slice(11, 19),
        maxPatients,
        selectedDate,
      };
      await createAppointment(appnt);
    }
    setIsLoading(true);
    handleOnClose();
  };

  return (
    <Card mt={5}>
      <CardBody>
        <Heading fontSize="md" mb="2">
          Fill Next Appointment{" "}
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
        <TimeSlot setSelectedTimeSlots={setTimeSlot} selectedTimeSlots={timeSlot} />

        <Flex mt={5} justifyContent={"flex-end"}>
          <Button
            colorScheme="brand"
            isLoading={isLoading}
            onClick={handleOnAdd}
          >
            Add
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default AppointmentForm;
