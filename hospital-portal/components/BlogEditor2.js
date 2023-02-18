import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import Dante from "Dante2";
import { uploadImage } from "../firebase/blogServices";

const BlogEditor2 = () => {
  const [content, setContent] = useState([]);
  const [widgets, setWidgets] = useState([]);

  const updateEditorState = async () => {
    const { ImageBlockConfig } = await import(
      "Dante2/package/esm/editor/components/blocks/image"
    );

    setWidgets([
      ImageBlockConfig({
        options: {
          upload_handler: async function upload_handler(file, ctx) {
            console.log({ ctx });
            if (file) {
              const url = await uploadImage(file);
              ctx.uploadCompleted(url);
            } else {
              ctx.uploadCompleted(ctx.img.currentSrc);
            }
          },
        },
      }),
    ]);
  };

  const onChange = (editor) => {
    console.log(editor.emitSerializedOutput());
    setContent({ data: editor.emitSerializedOutput() });
  };

  useEffect(() => {
    updateEditorState();
  }, []);

  return (
    <Box ml={70} mt={2}>
      <Dante
        widgets={widgets}
        title_placeholder="Add your Title"
        body_placeholder="Write your blog..."
        onChange={onChange}
      />
    </Box>
  );
};

export default BlogEditor2;
