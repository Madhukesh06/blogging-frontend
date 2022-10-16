import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  VStack,
  Text,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";

import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {TfiEmail} from "react-icons/tfi"
import SignUpModalForm from "./SignUpModalForm";
// import SignUpModalForm from "./SignUpModalForm";

type params={
    isSignUpModelOpen:boolean,
    openSignInModel:Function,
    closeSignupModel:Function,
    openSignupModel:Function
}

export default function SignUpModal(props:params) {
  const {isOpen:isSignUpModalForm,onOpen:openSignUpModalForm,onClose:closeSignUpModalForm} =useDisclosure()
  return (
    <>
      <Button
      
        onClick={()=>props.openSignupModel()}
        p={{ md: 4 }}
        backgroundColor={"black"}
        color="white"
        borderRadius={30}
        _hover={{ backgroundColor: "black.100" }}
      >
        Get started{" "}
      </Button>
      <Modal isOpen={props.isSignUpModelOpen} onClose={()=>props.closeSignupModel()} size="3xl">
        <ModalOverlay />
        <ModalContent minH={700} m={0}>
          <ModalHeader
            textAlign={"center"}
            p={20}
            fontFamily="Georgia"
            fontWeight="500"
            fontSize={30}
          >
            Join Medium.
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody alignItems="center">
            <VStack m="auto" align="stretch" w={{base:"100%",md:"30%"}} >
              <Button
                leftIcon={<FcGoogle />}
                backgroundColor={"white"}
                borderRadius={20}
                border="1px solid gray"
                _hover={{ border: "1px solid black" }}
                textAlign="left"
              >
                Sign up with Google
              </Button>
              <Button
               textAlign="left"
                leftIcon={<FaFacebookSquare />}
                backgroundColor={"white"}
                borderRadius={20}
                border="1px solid gray"
                _hover={{ border: "1px solid black" }}
              >
                Sign up with Facebook
              </Button>
                <SignUpModalForm  isSignUpModalForm={isSignUpModalForm} closeSignUpModalForm={closeSignUpModalForm} closeSignupModel={props.closeSignupModel} openSignUpModalForm={openSignUpModalForm} openSignupModel={props.openSignupModel} />
            </VStack>
            <Flex mt={10} align="center" justifyContent="center">

             <Text textAlign="center">Aleardy have an account?  </Text>
             <Button variant="unstyled" backgroundColor={"white"} _hover={{backgroundColor:"white"}} color={"green"} fontWeight="700" onClick={()=>{
                    props.closeSignupModel()
                    props.openSignInModel()
             }}   >Sign in</Button>
            </Flex>
           
           <VStack w={{base:"98%",md:"80%"}} m="auto" mt={10}>

           <Text textAlign="center">Click “Sign Up” to agree to Medium’s Terms of Service and acknowledge that Medium’s Privacy Policy applies to you.</Text>
           </VStack>


          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
