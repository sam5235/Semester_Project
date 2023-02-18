import {
  Badge,
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Icon,
  Image,
  Input,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { RiArticleLine, RiAddFill, RiSearch2Line } from "react-icons/ri";
import { useAuth } from "../context/AuthContext";

const PostTable = () => {
  const { user } = useAuth();
  return (
    <Box>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        borderBottomColor="gray.100"
        pb={2}
        mb={4}
        borderBottom="1px solid lightgray"
      >
        <Flex alignItems="center">
          <Icon fontSize="6xl" as={RiArticleLine} color="blue.500" />
          <Box>
            <Text fontSize="xl">Posts</Text>
            <Text
              fontSize="xs"
              color="gray.500"
            >{`All ${user.displayName} Blog Posts`}</Text>
          </Box>
        </Flex>

        <Flex alignItems="center">
          <Button variant="solid" colorScheme="brand" rounded="3xl" p="2">
            <Icon as={RiAddFill} fontSize="xl" color="white" />
          </Button>
          <Input
            placeholder="Search..."
            colorScheme="brand"
            bg="white"
            mx={2}
            rounded="3xl"
          />
          <Button variant="solid" colorScheme="brand" rounded="3xl" p="2">
            <Icon as={RiSearch2Line} fontSize="xl" color="white" />
          </Button>
        </Flex>
      </Flex>

      <TableContainer>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th />
              <Th>Title & Description</Th>
              <Th isNumeric>Length</Th>
              <Th isNumeric>Category</Th>
              <Th isNumeric>Published</Th>
              <Th isNumeric>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Checkbox w={"20px"} />
              </Td>
              <Td>
                <Flex alignItems="center">
                  <Image
                    w="50px"
                    src="https://nebeb-files.fra1.digitaloceanspaces.com/articles/1634358817716.jpg"
                  />
                  <Box ml={2} maxW="150px">
                    <Text>የልብ ሐዘን</Text>
                    <Text fontSize="x-small" color="gray.500" isTruncated>
                      ፍቅረኛውን አጥቶ ሐዘን ውስጥ የገባ ሰው የልብ ሕመም
                    </Text>
                  </Box>
                </Flex>
              </Td>
              <Td isNumeric>
                <Text fontSize="sm">5 min</Text>
              </Td>
              <Td>
                <Stack maxW="150px" direction="row">
                  <Badge colorScheme="blue" fontSize="0.7em">
                    Success
                  </Badge>
                  <Badge colorScheme="blue" fontSize="0.7em">
                    Removed
                  </Badge>
                  <Badge colorScheme="blue" fontSize="0.7em">
                    New
                  </Badge>
                </Stack>
              </Td>
              <Td>
                <Text fontSize="sm">{new Date().toDateString()}</Text>
              </Td>
              <Td>
                <Badge colorScheme="green" fontSize="0.7em">
                  Approved
                </Badge>
              </Td>
            </Tr>

            <Tr>
              <Td>
                <Checkbox w={"20px"} />
              </Td>
              <Td>
                <Flex alignItems="center">
                  <Image
                    w="50px"
                    src="https://nebeb-files.fra1.digitaloceanspaces.com/articles/1634358817716.jpg"
                  />
                  <Box ml={2} maxW="150px">
                    <Text>የልብ ሐዘን</Text>
                    <Text fontSize="x-small" color="gray.500" isTruncated>
                      ፍቅረኛውን አጥቶ ሐዘን ውስጥ የገባ ሰው የልብ ሕመም
                    </Text>
                  </Box>
                </Flex>
              </Td>
              <Td isNumeric>
                <Text fontSize="sm">5 min</Text>
              </Td>
              <Td>
                <Stack maxW="150px" direction="row">
                  <Badge colorScheme="blue" fontSize="0.7em">
                    Success
                  </Badge>
                  <Badge colorScheme="blue" fontSize="0.7em">
                    Removed
                  </Badge>
                  <Badge colorScheme="blue" fontSize="0.7em">
                    New
                  </Badge>
                </Stack>
              </Td>
              <Td>
                <Text fontSize="sm">{new Date().toDateString()}</Text>
              </Td>
              <Td>
                <Badge colorScheme="orange" fontSize="0.7em">
                  Pending
                </Badge>
              </Td>
            </Tr>

            <Tr>
              <Td>
                <Checkbox w={"20px"} />
              </Td>
              <Td>
                <Flex alignItems="center">
                  <Image
                    w="50px"
                    src="https://nebeb-files.fra1.digitaloceanspaces.com/articles/1633909857527.jpeg"
                  />
                  <Box ml={2} maxW="150px">
                    <Text isTruncated>የሳሚ ዳን ከፍታ በ"መንገዱ ላይ" ዜማ</Text>
                    <Text fontSize="x-small" color="gray.500" isTruncated>
                      ጥሩ ይዘት ያለው ይህ ዘፈን፤ በግጥሙ ስንኛት ውስጥ ብዙ ውብ ትርጉሞችን የያዙ ማራኪ ቃላት
                      አሉት
                    </Text>
                  </Box>
                </Flex>
              </Td>
              <Td isNumeric>
                <Text fontSize="sm">5 min</Text>
              </Td>
              <Td>
                <Stack maxW="150px" direction="row">
                  <Badge colorScheme="blue" fontSize="0.7em">
                    Removed
                  </Badge>
                  <Badge colorScheme="blue" fontSize="0.7em">
                    Success
                  </Badge>
                </Stack>
              </Td>
              <Td>
                <Text fontSize="sm">{new Date().toDateString()}</Text>
              </Td>
              <Td>
                <Badge colorScheme="red" fontSize="0.7em">
                  Failed
                </Badge>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PostTable;
