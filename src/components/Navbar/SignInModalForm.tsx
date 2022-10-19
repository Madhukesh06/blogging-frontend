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
import { useState } from "react";

import { FaLessThan } from "react-icons/fa";
import {TfiEmail} from "react-icons/tfi"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { signinAction } from "../../store/auth/auth.action";


type params={
  closeSignInModel:Function,
  openSignInModalForm:Function,
  closeSignInModalForm:Function,
  isSignInModalForm:boolean,
  openSignInModel:Function
}


export default function SignInModalForm(props:params) {
  const [email,setEmail]=useState<any>("")
   const dispatch = useDispatch<any>();
   const navigate = useNavigate()
   const snackBar=useToast()

  const handleSignIn = ()=>{
    console.log(email)
    dispatch(signinAction(email)).then((res:any)=>{
      
      if(res){
        snackBar({
        title: 'Signed In successful',
        description: "Signed in to HomePage",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
        navigate("/home")
      }
        else {
          // props.closeSignInModalForm()
          // props.closeSignInModel()
          snackBar({
            title: 'Wrong Creds',
            description: "Email and password wrong",
            status: 'error',
            duration: 3000,
            isClosable: true,
          })
        } 
      })
    
    }

  return (
    <>
      <Button onClick={
        ()=>{
          // props.closeSignupModel()
          props.openSignInModalForm()
        }
    }
               textAlign="left"
              leftIcon={<TfiEmail/>}   backgroundColor={"white"}
                borderRadius={20}
                border="1px solid gray"
                _hover={{ border: "1px solid black" }} 
                >Sign in with Email  </Button>
      <Modal isOpen={props.isSignInModalForm} onClose={()=>{
        props.closeSignInModel()
        props.closeSignInModalForm()}
        } size="3xl">
        <ModalOverlay />
        <ModalContent minH={700} m={0}>
          <ModalHeader
            textAlign={"center"}
            mt={100}
            fontFamily="Georgia"
            fontWeight="500"
            fontSize={25}
          >
          Sign in with email
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody  alignItems="center" w={{base:"100%",md:"40%"}} m="auto" alignContent={"center"}>
            <Text textAlign={"center"}>Enter the email address associated with your account, and we’ll send a magic link to your inbox.</Text>
            <Text textAlign={"center"} mt={10}>Your email</Text>
           
            <Input value={email} onChange={(e)=>setEmail(e.target.value)} type="email"  variant="unstyled" borderRadius={0}  borderBottom="1px solid black" textAlign="center" />
            <Button onClick={handleSignIn}  fontSize={15} my={5} borderRadius={30} w="100%" backgroundColor="black" color="white" _hover={{ backgroundColor:"black", color:"white"}}>Continue</Button>
          <Flex alignItems="center" justifyContent="center" color="#1a8917" gap='2'  mt={8}>
          <FaLessThan /> 
          <Button variant="unstyled" onClick={()=>{
            props.openSignInModel()
              props.closeSignInModalForm()
          }} fontWeight={"400"} fontFamily="Helvetica Neue" > All Sign in options</Button>
          </Flex>

          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}




