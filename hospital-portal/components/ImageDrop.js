import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { SlCloudUpload, SlClose } from "react-icons/sl";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  width: 220,
  height: 220,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

function ImageDrop({ files, setFiles }) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <Box style={thumb} key={file.name} position="relative">
      <Box style={thumbInner}>
        <Image
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </Box>
      <Button
        onClick={() => setFiles([])}
        colorScheme="red"
        position="absolute"
        p={0}
        right="0px"
        top={0}
      >
        <Icon as={SlClose} fontSize="lg" color="white" />
      </Button>
    </Box>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <Box
      border="2px"
      borderStyle="dashed"
      borderColor="gray.500"
      borderRadius={5}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      _hover={{
        borderColor: "blue.500",
        bg: useColorModeValue("blue.50", "gray.900"),
      }}
      p={5}
      h={250}
    >
      <Box {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        {thumbs.length === 0 && (
          <Flex direction="column" justifyContent="center" alignItems="center">
            <Icon as={SlCloudUpload} fontSize="4xl" color="blue.500" mb="2" />

            <Text fontSize="xs" textAlign="center" color="gray.500">
              Drag and drop the cover image or click here User high quaity image
              to make it more inviting to readers
            </Text>
          </Flex>
        )}
      </Box>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </Box>
  );
}

export default ImageDrop;
