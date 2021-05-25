import { FaGithub, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa';

import { Box, Heading, HStack, Icon, Image, VStack } from '@chakra-ui/react';

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
            <HStack spacing={5}>
                <a href="mailto:gilvanjunior@protonmail.com">
                    <Icon as={FaRegEnvelope} w={6} h={6} />
                </a>
                <a href="http://github.com/gilvan-araujo">
                    <Icon as={FaGithub} w={6} h={6} />
                </a>
                <a href="https://www.linkedin.com/in/gilvan-araujo-jr/">
                    <Icon as={FaLinkedinIn} w={6} h={6} />
                </a>
            </HStack>
        </VStack>
    )
}