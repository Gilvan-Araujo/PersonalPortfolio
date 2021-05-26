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
                    width="15rem"
                    height="15rem"
                />
            </Box>
            <Heading py={2}>
                Personal Portfolio
            </Heading>
            <HStack spacing={10}>
                <a href="mailto:gilvanjunior@protonmail.com">
                    <VStack>
                        <Icon as={FaRegEnvelope} w={6} h={6} />
                        <span>E-mail</span>
                    </VStack>
                </a>
                <a href="http://github.com/gilvan-araujo">
                    <VStack>
                        <Icon as={FaGithub} w={6} h={6} />
                        <span>Github</span>
                    </VStack>
                </a>
                <a href="https://www.linkedin.com/in/gilvan-araujo-jr/">
                    <VStack>
                        <Icon as={FaLinkedinIn} w={6} h={6} />
                        <span>Linkedin</span>
                    </VStack>
                </a>
            </HStack>
        </VStack>
    )
}