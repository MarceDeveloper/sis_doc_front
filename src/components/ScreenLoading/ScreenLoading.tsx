import { Box, Center, HStack, Heading, Spinner, Text, ZStack } from 'native-base'
import React from 'react'

interface Iprops{
    is_visible:boolean
}

export const ScreenLoading = ({
    is_visible
}:Iprops) => {

  if (!is_visible) {
    return null
  }
  return (
    <Box width={"full"} height={"100vh"} backgroundColor={"#140c0ca7"}
        position={"fixed"}
        top={0} right={0} zIndex={3}
        alignItems={'center'}
        justifyContent={'center'}
        // opacity={0.5}
    >
        <HStack justifyContent={'center'} alignItems={'center'}>
            {/* <Heading color="primary.500" fontSize="md">
                Loading
            </Heading> */}
            <Center
                backgroundColor={'white'}
                rounded={8}
                padding={100}
                opacity={1}
            >
                <Spinner size={"lg"} accessibilityLabel="Loading posts" />
                <Text>Loading..</Text>

            </Center>

        </HStack>
        
    </Box>
    // <Box height={"100vh"} backgroundColor={'dark.300'} opacity={0.8}
    //     position={"absolute"}
    //     top={0} right={0} left={0} bottom={0} zIndex={2}
    //     alignItems={'center'}
    //     justifyContent={'center'}
    // >
    //     <Center background={'white'}
    //         minWidth={[200,"90vw"]}
    //     >
    //         <Text>Loading..</Text>
    //     </Center>
    // </Box>
  )
}
