import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  VStack,
  Text,
  Flex,
} from "@chakra-ui/react";

import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsApple, BsTwitter } from "react-icons/bs";
import SignInModalForm from "./SignInModalForm";

type params = {
  isSignInModelOpen: boolean;
  closeSignInModel: Function;
  openSignInModel: Function;
  openSignupModel: Function;
};

export default function SignInModal(props: params) {
  const {
    isOpen: isSignInModalForm,
    onOpen: openSignInModalForm,
    onClose: closeSignInModalForm,
  } = useDisclosure();
  return (
    <>
      <Button
        variant="unstyled"
        onClick={() => props.openSignInModel()}
        backgroundColor={"#ffc731"}
        _hover={{ backgroundColor: "#ffc731" }}
        fontWeight="300"
        p={1}
      >
        Sign In
      </Button>
      <Modal
        isOpen={props.isSignInModelOpen}
        onClose={() => props.closeSignInModel()}
        size="3xl"
      >
        <ModalOverlay />
        <ModalContent minH={700} m={0}>
          <ModalHeader
            textAlign={"center"}
            p={20}
            fontFamily="Georgia"
            fontWeight="500"
            fontSize={30}
          >
            Welcome back.
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody alignItems="center">
            <VStack m="auto" align="stretch" w={{ base: "100%", md: "30%" }}>
              <Button
                leftIcon={<FcGoogle />}
                backgroundColor={"white"}
                borderRadius={20}
                border="1px solid gray"
                _hover={{ border: "1px solid black" }}
                textAlign="left"
              >
                Sign in with Google
              </Button>
              <Button
                textAlign="left"
                leftIcon={<FaFacebookSquare />}
                backgroundColor={"white"}
                borderRadius={20}
                border="1px solid gray"
                _hover={{ border: "1px solid black" }}
              >
                Sign in with Facebook
              </Button>
              <Button
                textAlign="left"
                leftIcon={<BsApple />}
                backgroundColor={"white"}
                borderRadius={20}
                border="1px solid gray"
                _hover={{ border: "1px solid black" }}
              >
                Sign in with Apple
              </Button>
              <Button
                textAlign="left"
                leftIcon={<BsTwitter />}
                backgroundColor={"white"}
                borderRadius={20}
                border="1px solid gray"
                _hover={{ border: "1px solid black" }}
              >
                Sign in with Twitter
              </Button>
              <SignInModalForm
                isSignInModalForm={isSignInModalForm}
                closeSignInModalForm={closeSignInModalForm}
                closeSignInModel={props.closeSignInModel}
                openSignInModalForm={openSignInModalForm}
                openSignInModel={props.openSignInModel}
              />
            </VStack>
            <Flex mt={10} align="center" justifyContent="center">
              <Text textAlign="center">No account ? </Text>
              <Button
                variant="unstyled"
                backgroundColor={"white"}
                _hover={{ backgroundColor: "white" }}
                color={"green"}
                fontWeight="700"
                onClick={() => {
                  props.openSignupModel();
                  props.closeSignInModel();
                }}
              >
                Create one
              </Button>
            </Flex>

            <VStack w={{ base: "98%", md: "80%" }} m="auto" mt={10}>
              <Text mb={6}>Forgot email or trouble signing in? Get help.</Text>

              <Text textAlign="center">
                Click “Sign In” to agree to Medium’s Terms of Service and
                acknowledge that Medium’s Privacy Policy applies to you.
              </Text>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
