import { Box, Flex, Switch, Text } from "@chakra-ui/react";
import { useState } from "react";

const TimeSlotSelector = ({selectedTimeSlots, setSelectedTimeSlots }) => {
 
  const handleTimeSlotChange = (event) => {
    const { value, checked } = event.target;

    let newTimeSlot = [];

    if (checked) {
      newTimeSlot = [...selectedTimeSlots, value];
    } else {
      newTimeSlot = selectedTimeSlots.filter((slot) => slot !== value);
    }
    setSelectedTimeSlots(newTimeSlot);
  };
  return (
    <Box m={3}>
      <Text  as="b" >Select time slot(s):</Text>
      <Flex mt={3} direction="column" gap={2}>
        <Switch
          id="time2"
          value="08:00 AM - 10:00 PM"
          isChecked={selectedTimeSlots.includes("08:00 AM - 10:00 PM")}
          onChange={handleTimeSlotChange}
        >
          {" "}
          08:00 AM - 10:00 PM{" "}
        </Switch>

        <Switch
          id="time2"
          value="10:00 AM - 12:00 PM"
          isChecked={selectedTimeSlots.includes("10:00 AM - 12:00 PM")}
          onChange={handleTimeSlotChange}
        >
          {" "}
          10:00 AM - 12:00 PM{" "}
        </Switch>

        <Switch
          id="time2"
          value="12:00 PM - 02:00 PM"
          isChecked={selectedTimeSlots.includes("12:00 PM - 02:00 PM")}
          onChange={handleTimeSlotChange}
        >
          {" "}
          12:00 PM - 02:00 PM
        </Switch>

        <Switch
          id="time2"
          value="02:00 PM - 04:00 PM"
          isChecked={selectedTimeSlots.includes("02:00 PM - 04:00 PM")}
          onChange={handleTimeSlotChange}
        >
          {" "}
          02:00 PM - 04:00 PM
        </Switch>

        <Switch
          id="time2"
          value="04:00 PM - 06:00 PM"
          isChecked={selectedTimeSlots.includes("04:00 PM - 06:00 PM")}
          onChange={handleTimeSlotChange}
        >
          {" "}
          04:00 PM - 06:00 PM
        </Switch>
      </Flex>
    </Box>
  );
};

export default TimeSlotSelector;
