import { Box, Heading, Image, VStack } from '@chakra-ui/react';

export function Header() {
    return (
        <VStack
            as="header"
            w="100%"
            align="center"
            justify="center"
            mt="8"
            mb="8"
            spacing="4"
        >
            <Box boxSize="15rem">
                <Image
                    src="/profile.png"
                    alt="Profile photo"
                    borderRadius="full"
                    fallbackSrc="https://via.placeholder.com/240"
                />
            </Box>
            <Heading>
                Personal Portfolio
        </Heading>
        </VStack>
    )
}