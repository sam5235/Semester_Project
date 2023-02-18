import {
  Box,
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { publishBlog } from "../../firebase/blogServices";

import ImageDrop from "../ImageDrop";

const options = ["Discovery", "Service", "Diseases"].map((data) => ({
  label: data,
  value: data,
}));

const BlogForm = ({ content, selectedBlog }) => {
  const { user } = useAuth();
  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onPubish = async () => {
    const blog = {
      title,
      description,
      categories,
      files,
      content,
    };
    setIsLoading(true);
    await publishBlog(blog, () => setIsLoading(false));
  };

  const validateContent = () => {
    if (!content || !content.content) {
      return false;
    }

    return (
      content.content.length > 1 ||
      Boolean(Object.keys(content.content[0]).length > 1)
    );
  };

  const publishDisabled =
    !Boolean(title) ||
    !Boolean(files.length) ||
    !Boolean(description) ||
    !Boolean(categories.length) ||
    !validateContent();

  return (
    <Box>
      <ImageDrop files={files} setFiles={setFiles} />

      <Box mt={4} mb={4}>
        <label>Title</label>
        <Input
          mt={2}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Text mt={1} fontSize="xs" color="gray.400">
          Add title for your article
        </Text>
      </Box>

      <Box mt={2} mb={4}>
        <label>Description</label>
        <Textarea
          mt={2}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Text mt={1} fontSize="xs" color="gray.400">
          Tell a little about the blog for your readers
        </Text>
      </Box>

      <Box mt={2} mb={4}>
        <label>Catergory</label>
        <Box mt={2}>
          <Select
            options={options}
            isMulti
            placeholder="Add category"
            value={categories}
            onChange={setCategories}
          />
        </Box>
        <Text mt={1} fontSize="xs" color="gray.400">
          Add category (up to 3) so readers know what is your article about
        </Text>
      </Box>

      <Flex justifyContent="end">
        <Button mr={4}>Cancel</Button>
        <Button
          isDisabled={publishDisabled}
          colorScheme="brand"
          onClick={onPubish}
        >
          Publish
        </Button>
      </Flex>

      <Modal isOpen={isLoading} isCentered>
        <ModalOverlay />
        <ModalContent w="fit-content">
          <ModalHeader textAlign="center">Publishing Article</ModalHeader>
          <ModalBody display="flex" flexDir="column" alignItems="center">
            <Spinner mb={5} size="lg" />
            <Text fontSize="sm" color="gray.600" mb={4}>
              Please wait until blog is published!
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default BlogForm;
