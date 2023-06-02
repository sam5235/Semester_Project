import { Box, Flex, Grid, GridItem} from "@chakra-ui/react";
import Calendar from "../components/forms/Calandar";
import AppointmentForm from "../components/forms/AppointmentForm";

const AppointmentPage = () =>{

  return (
    <Grid templateColumns="70% 30%" gap={4}>
      <GridItem> <Calendar/></GridItem>
      <GridItem><AppointmentForm/></GridItem>
    </Grid>
  );

}

export default AppointmentPage;
