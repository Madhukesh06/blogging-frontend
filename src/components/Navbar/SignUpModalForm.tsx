import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Flex,
  Input,
  useToast,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { FaLessThan } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { useDispatch } from "react-redux";
import { signupAction } from "../../store/auth/auth.action";

type params = {
  isSignUpModalForm: boolean;
  closeSignupModel: Function;
  openSignUpModalForm: Function;
  closeSignUpModalForm: Function;
  openSignupModel: Function;
};

const initialvalue = {
    email:"",
    password:""
  }

export default function SignUpModalForm(props: params) {
  const [show, setShow] = useState<boolean>(false);
  const [creds,setCreds]=useState<any>(initialvalue)
   const snackBar=useToast()
  const dispatch=useDispatch()
  const onChange =(e:ChangeEvent<HTMLInputElement>)=>{
      const {name,value} = e.target;
      setCreds({...creds,[name]:value})
  }

  const handleSignUp =()=>{
    console.log(creds)
    dispatch<any>(signupAction(creds)).then((res:boolean)=>{
       
      if(res){
        snackBar({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
       props.openSignUpModalForm()
      }
        
        else {
          // props.closeSignInModalForm()
          // props.closeSignInModel()
          snackBar({
            title: 'Wrong Creds',
            description: "Email already exists",
            status: 'error',
            duration: 3000,
            isClosable: true,
          })
        } 
    })
  }

  return (
    <>
      <Button
        onClick={() => {
          // props.closeSignupModel()
          props.openSignUpModalForm();
        }}
        textAlign="left"
        leftIcon={<TfiEmail />}
        backgroundColor={"white"}
        borderRadius={20}
        border="1px solid gray"
        _hover={{ border: "1px solid black" }}
      >
        Sign up with Email{" "}
      </Button>
      <Modal
        isOpen={props.isSignUpModalForm}
        onClose={() => {
          props.closeSignupModel();
          props.closeSignUpModalForm();
        }}
        size="3xl"
      >
        <ModalOverlay />
        <ModalContent minH={700} m={0}>
          <ModalHeader
            textAlign={"center"}
            mt={100}
            fontFamily="Georgia"
            fontWeight="500"
            fontSize={25}
          >
            Sign up with email
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            alignItems="center"
            w={{ base: "100%", md: "40%" }}
            m="auto"
            alignContent={"center"}
          >
            <Text textAlign={"center"}>
              Enter your email address to create an account.
            </Text>
            <Text textAlign={"center"} mt={10}>
              Your email
            </Text>
            <Input
            name="email"
            value={creds.email}
              type="email"
              variant="unstyled"
              borderRadius={0}
              borderBottom="1px solid black"
              textAlign="center"
              onChange={onChange}
            />
            <Text textAlign={"center"} mt={10}>
              Your password
            </Text>
            <Input
            name="password"
              value={creds.password}
              type={show ? "text" : "password"}
              variant="unstyled"
              borderRadius={0}
              borderBottom="1px solid black"
              textAlign="center"
              onChange={onChange}
            />
            <Button
              fontSize={15}
              my={5}
              borderRadius={30}
              w="100%"
              backgroundColor="black"
              color="white"
              _hover={{ backgroundColor: "black", color: "white" }}
              onClick={handleSignUp}
            >
              Continue
            </Button>
            <Flex
              alignItems="center"
              justifyContent="center"
              color="#1a8917"
              gap="2"
              mt={8}
            >
              <FaLessThan />
              <Button
                variant="unstyled"
                onClick={() => {
                  props.openSignupModel();
                  props.closeSignUpModalForm();
                }}
                fontWeight={"400"}
                fontFamily="Helvetica Neue"
              >
                {" "}
                All Sign up options
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
