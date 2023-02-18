import {Card, CardBody, Container, Grid, GridItem, useColorModeValue} from "@chakra-ui/react"

export default function Home() {
  return (
    <Container>
       <Grid
      templateColumns="repeat(12, 1fr)"
      height="calc(100vh - 50px)"
      p={5}
      gap={3}
    >
      <GridItem colSpan={8}>
       
      </GridItem>
      <GridItem colSpan={4}>
        <Card
          bg={useColorModeValue("white", "gray.800")}
          boxShadow="xl"
          position="sticky"
          top="80px"
        >
          <CardBody>
          </CardBody>
        </Card>
      </GridItem>
    </Grid>
    </Container>
  )
}
