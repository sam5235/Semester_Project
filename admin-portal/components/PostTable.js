import {
  Badge,
  Box,
  Button,
  Checkbox,
  Flex,
  Icon,
  Image,
  Input,
  Spinner,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RiArticleLine, RiSearch2Line } from "react-icons/ri";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { useAuth } from "../context/AuthContext";
import { getBlogs } from "../firebase/blogServices";
import { query } from "firebase/firestore";
import Pagination from "./pagination";

const PostTable = ({ setBlogToEdit, setFiles }) => {
  const { user } = useAuth();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState();
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const fetchBlogs = async () => {
    const data = await getBlogs();
    data && setLoading(false);
    setBlogs(data);
  };

  const filteredBlogs = blogs.filter(
    (blog) =>
      query === "" || blog.title.toLowerCase().includes(query.toLowerCase())
  );

  const dataSize = filteredBlogs.length;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    fetchBlogs();
  }, []);

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
          <Icon
            w={50}
            h={50}
            fontSize="6xl"
            as={RiArticleLine}
            color="blue.500"
          />
          <Box>
            <Text fontSize="xl">Blogs & Advertisments Posts</Text>
            <Text fontSize="xs" color="gray.500">{`Meditopia Blog Posts`}</Text>
          </Box>
        </Flex>

        <Flex alignItems="center">
          {selectedBlog && (
            <Flex>
              <Button
                variant="solid"
                rounded="3xl"
                colorScheme="brand"
                onClick={() => {
                  setFiles([
                    {
                      name: selectedBlog.coverImage,
                      preview: selectedBlog.coverImage,
                    },
                  ]);
                  setBlogToEdit({ ...selectedBlog, edit: true });
                }}
              >
                View Cover Info
              </Button>
              <Button
                variant="solid"
                rounded="3xl"
                ml={2}
                colorScheme="brand"
                onClick={() => {
                  setFiles([
                    {
                      name: selectedBlog.coverImage,
                      preview: selectedBlog.coverImage,
                    },
                  ]);
                  setBlogToEdit({ ...selectedBlog, edit: true });
                }}
              >
                View Content
              </Button>
            </Flex>
          )}
          <Input
            placeholder="Search..."
            colorScheme="brand"
            bg={useColorModeValue("white", "gray.900")}
            mx={2}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
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
              <Th>Category</Th>
              <Th>Published</Th>
              <Th>Status</Th>
              <Th>Approve or Reject</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentBlogs.map((blog, key) => (
              <Tr key={key}>
                <Td>
                  <Checkbox
                    w={"20px"}
                    isChecked={selectedBlog && selectedBlog.id === blog.id}
                    onChange={() => {
                      setSelectedBlog(
                        selectedBlog && selectedBlog.id === blog.id
                          ? null
                          : blog
                      );
                    }}
                  />
                </Td>
                <Td>
                  <Flex alignItems="center">
                    <Image w="50px" src={blog.coverImage} />
                    <Box ml={2} maxW="150px">
                      <Text isTruncated>{blog.title}</Text>
                      <Text fontSize="x-small" color="gray.500" isTruncated>
                        {blog.description}
                      </Text>
                    </Box>
                  </Flex>
                </Td>
                <Td isNumeric>
                  <Text fontSize="sm">{blog.length.text}</Text>
                </Td>
                <Td>
                  <Stack maxW="150px" direction="row">
                    {blog.categories.map((category, key) => (
                      <Badge key={key} colorScheme="blue" fontSize="0.7em">
                        {category.label}
                      </Badge>
                    ))}
                  </Stack>
                </Td>
                <Td>
                  <Text fontSize="sm">
                    {new Date(blog.datePublished).toDateString()}
                  </Text>
                </Td>
                <Td>
                  <Badge
                    colorScheme={
                      blog.status === "approved" ? "green" : "orange"
                    }
                    fontSize="0.7em"
                    textTransform="capitalize"
                  >
                    {blog.status}
                  </Badge>
                </Td>
                <Td>
                  <Flex justify="center">
                    <Button
                      variant="solid"
                      colorScheme="green"
                      rounded="3xl"
                      disabled={blog.status === "approved"}
                      p="2"
                    >
                      <Icon as={CheckIcon} fontSize="xl" color="white" />
                    </Button>
                    <Button
                      variant="solid"
                      colorScheme="red"
                      rounded="3xl"
                      p="2"
                      disabled={blog.status !== "approved"}
                      ml={2}
                    >
                      <Icon as={CloseIcon} fontSize="xl" color="white" />
                    </Button>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {!loading && (
        <Pagination
          items={filteredBlogs}
          dataSize={dataSize}
          indexOfLastItem={indexOfLastItem}
          indexOfFirstItem={indexOfFirstItem}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
        />
      )}

      {loading && (
        <Flex w="100%" justifyContent="center" my={5}>
          <Spinner color="blue.400" size="lg" />
        </Flex>
      )}
    </Box>
  );
};

export default PostTable;
