import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

export default function LandingPage() {
  return (
    <Container maxW={'7xl'}  bg={useColorModeValue('#ffc731', '#ffc731')} px={{base:4,lg:20,md:10}} borderBottom="1px solid black">
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 15 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '5xl', lg: '7xl' }}>
            <Text
              as={'span'}
              fontFamily="georgia"
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.400',
                zIndex: -1,
              }}>
             Stay curious.
            </Text>
            <br />
          </Heading>
          <Text color={'#292929'} fontFamily="Helvetica Neue" fontSize={30}>
            Discover stories, thinking, and expertise from writers on any topic.
          </Text>
          <Stack
            spacing={{ base: 2, sm: 3 }}
            direction={{ base: 'column', sm: 'row' }}>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={10}
              colorScheme={'red'}
              bg={'#191919'}
              _hover={{ bg: 'black' }}>
              Start reading
            </Button>
           
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
        
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
           
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}

