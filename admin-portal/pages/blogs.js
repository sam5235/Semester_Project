import { useState } from "react";
import {
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

import PostTable from "../components/PostTable";
import TinyEditor from "../components/TinyEditor";

const BlogsPage = () => {
  const [blog, setBlog] = useState({});
  const [files, setFiles] = useState([]);

  return (
    <Grid
      templateColumns="repeat(12, 1fr)"
      height="calc(100vh - 100px)"
      p={5}
      gap={3}
    >
      <GridItem colSpan={12}>
        <PostTable setBlogToEdit={setBlog} setFiles={setFiles} />
      </GridItem>

      <Modal
        size="6xl"
        isOpen={blog.title !== undefined}
        onClose={() => setBlog({})}
      >
        <ModalOverlay backdropFilter="blur(10px)" bg="transparent" />

        <ModalContent height={850}>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TinyEditor blog={blog} setBlog={setBlog} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Grid>
  );
};

export default BlogsPage;
