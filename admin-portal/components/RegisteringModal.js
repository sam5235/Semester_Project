import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
} from "@chakra-ui/react";
function Register() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button background="#1565c0" variant="outline"  color="white"onClick={onOpen}>
        Register Hospital
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Register;
