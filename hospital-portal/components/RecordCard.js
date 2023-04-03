import { StarIcon } from "@chakra-ui/icons";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Avatar, Badge, Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const RecordCard = ({ record }) => {
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: useColorModeValue("#3086e8", "#1A202C"), color: "white" }}
            contentArrowStyle={{ borderRight: `7px solid ${useColorModeValue("#3086e8", "#fff")}` }}
            iconStyle={{ background: useColorModeValue("#3086e8", "#1A202C"), color: '#fff' }}
            icon={<StarIcon />}
        >
            <Box>
                <Box>
                    <Flex>
                        <Avatar name={record.Hospital_name} />
                        <Text>{record.Hospital_name} </Text>

                    </Flex>
                    <Flex>
                        <Text>11/02/2023</Text>
                    </Flex>
                    <Flex>
                        <Text>{record.doctor}</Text>
                    </Flex>
                    <Flex>
                        <Flex alignItems="center">
                            {record.diseases.map((disease) => (
                                // <Text px={2}>{disease} </Text>
                                <Badge mt={2} maxH="24px" mx={2} colorScheme='blue'>{disease}</Badge>

                            ))}

                        </Flex>

                    </Flex>
                    <Accordion allowMultiple>
                        <AccordionItem style={{ border: "0px" }}>
                            <h2>
                                <AccordionButton>
                                    <Box color="white">
                                        <Text>Perscription</Text>

                                    </Box>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel>
                                {record.persc}
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem style={{ border: "0px", paddingLeft: "" }}>
                            <h2>
                                <AccordionButton>
                                    <Box color="white">
                                        <Text>Description</Text>

                                    </Box>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel>
                                {record.desc}

                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
            </Box>
            {/* <h3 className="vertical-timeline-element-title">{record.name}</h3>
            <h4 className="vertical-timeline-element-subtitle">{record.phone}</h4> */}

        </VerticalTimelineElement>
    );
}

export default RecordCard;