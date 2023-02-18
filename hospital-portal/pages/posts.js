import { useState } from "react";
import {
  Card,
  CardBody,
  Grid,
  GridItem,
  useColorModeValue,
} from "@chakra-ui/react";
import BlogEditor from "../components/BlogEditor";
import PostTable from "../components/PostTable";
import BlogForm from "../components/forms/BlogForm";

const PostsPage = () => {
  const [blog, setBlog] = useState();
  const [content, setContent] = useState({});
  const [mode, setMode] = useState("TABLE");

  return (
    <Grid
      templateColumns="repeat(12, 1fr)"
      height="calc(100vh - 50px)"
      p={5}
      gap={3}
    >
      <GridItem colSpan={4}>
        <Card
          bg={useColorModeValue("white", "gray.800")}
          boxShadow="xl"
          position="sticky"
          top="80px"
        >
          <CardBody>
            <BlogForm content={content} />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem colSpan={8}>
        {mode === "TABLE" && <PostTable setMode={setMode} />}
        {(mode === "EDIT" || mode === "ADD") && (
          <BlogEditor content={content} setContent={setContent} />
        )}
      </GridItem>
    </Grid>
  );
};

export default PostsPage;
