import dynamic from "next/dynamic";
import { Box, Flex, Spinner, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { uploadImage } from "../firebase/blogServices";

const Dante = dynamic(() => import("dante3"), {
  loading: () => (
    <Flex justifyContent="center" height="60vh" alignItems="center">
      <Spinner />
    </Flex>
  ),
  ssr: false,
});

const BlogEditor = ({ content, setContent }) => {
  const mode = useColorMode();
  const [theme, setTheme] = useState(null);
  const [widgets, setWidgets] = useState([]);

  const updateEditorState = async (mode) => {
    const { darkTheme, defaultTheme, ImageBlockConfig, DividerBlockConfig } =
      await import("dante3");

    if (mode === "dark") {
      setTheme({ ...darkTheme, dante_bg_color: "transparent" });
    } else {
      setTheme(defaultTheme);
    }

    setWidgets([
      ImageBlockConfig({
        options: {
          upload_handler: async function upload_handler(file, ctx) {
            if (!file) {
              return ctx.updateAttributes({ url: ctx.node.attrs.url });
            }
            const url = await uploadImage(file);
            ctx.updateAttributes({ url });
          },
        },
      }),
      DividerBlockConfig(),
    ]);
  };

  useEffect(() => {
    updateEditorState(mode.colorMode);
  }, [mode.colorMode]);

  return (
    <Box ml={70} mt={2}>
      <Dante
        bodyPlaceholder={"Write your blog..."}
        content={content}
        widgets={widgets}
        theme={theme}
        onUpdate={(editor) => setContent(editor.getJSON())}
      />
    </Box>
  );
};

export default BlogEditor;
