import Image from 'next/image';
import Link from 'next/link';

import { Avatar, Box, Center, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';

type AppCardProps = {
    name: string,
    description: string
    image: string,
    link: string
}

export function AppCard({ name, description, image, link }: AppCardProps) {
    return (
        <Link href={link}>
            <a target="_blank">
                <Center py={6}>
                    <Box
                        maxW={'320px'}
                        w={'full'}
                        h='35rem'
                        bg={useColorModeValue('gray.800', 'gray.50')}
                        boxShadow={'dark-lg'}
                        p={6}
                        overflow={'hidden'}
                    >
                        <Box
                            h={'240px'}
                            bg={'gray.800'}
                            mt={-6}
                            mx={-6}
                            mb={6}
                            pos={'relative'}
                        >
                            <Image
                                src={image}
                                layout={'fill'}
                                objectFit={'cover'}
                            />
                        </Box>
                        <Stack>
                            {/* <Text
                                color={'blue.500'}
                                textTransform={'uppercase'}
                                fontWeight={800}
                                fontSize={'md'}
                                letterSpacing={1.1}>
                                {name}
                            </Text> */}
                            <Heading
                                color={useColorModeValue('gray.100', 'gray.700')}
                                fontSize={'2xl'}
                            >
                                {name}
                            </Heading>
                            <Text color={'gray.500'} textAlign="justify">
                                {description}
                            </Text>
                        </Stack>
                    </Box>
                </Center>
            </a>
        </Link>
    )
}