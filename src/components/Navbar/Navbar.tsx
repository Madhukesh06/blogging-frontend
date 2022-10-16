import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Heading,
  HStack,
  Text,
  useDisclosure,
  
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { BsMedium } from 'react-icons/bs';
import SignUpModal from './SignUpModal';
import SignInModal from './SignInModel';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const {isOpen:isSignUpModelOpen,onClose:closeSignupModel,onOpen:openSignupModel}=useDisclosure()
  const {isOpen:isSignInModelOpen,onClose:closeSignInModel,onOpen:openSignInModel}=useDisclosure()
  return (
    <>
      <Box fontFamily="Segoe-UI"  bg={useColorModeValue('#ffc731', '#ffc731')} px={{base:4,lg:20,md:10}} borderBottom="1px solid black">
        <Flex  alignItems={'center'} justifyContent={'space-between'} p={3}>
    <HStack>
        <BsMedium size={50}/>
        <Heading fontFamily="Segoe-UI" >Medium</Heading>
    </HStack>

          <Flex alignItems={'center'}>
            <HStack direction={'row'} alignItems="center" spacing={8}>
              <HStack display={{base:"none",md:"flex",lg:"flex"}} spacing={5} fontSize="16px" fontWeight="300">
              <Text>Our story</Text>
              <Text>Write</Text>
              <SignInModal isSignInModelOpen={isSignInModelOpen} closeSignInModel={closeSignInModel} openSignInModel={openSignInModel} openSignupModel={openSignupModel}  />
              

              </HStack>
              <SignUpModal isSignUpModelOpen={isSignUpModelOpen} closeSignupModel={closeSignupModel} openSignupModel={openSignupModel} openSignInModel={openSignInModel}  /> 
              {/* <Button onClick={toggleColorMode} bg={useColorModeValue('#ffc731', '#ffc731')} _hover={{bg:useColorModeValue('#ffc731', '#ffc731')}} >
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button> */}
            </HStack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
