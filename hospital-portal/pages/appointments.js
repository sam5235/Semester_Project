import { Box, Flex, Grid, GridItem} from "@chakra-ui/react";
import Calendar from "../components/forms/Calandar";
import AppointmentForm from "../components/forms/AppointmentForm";
import AppointmentCard from "../components/common/AppointmentCard";

const AppointmentPage = () =>{

  return (
    <Box>
    <Grid templateColumns="70% 30%" gap={4}>
      <GridItem> <Calendar/></GridItem>
      <GridItem><AppointmentForm/></GridItem>
    </Grid>
    <AppointmentCard/>
    </Box>
  );

}

export default AppointmentPage;
