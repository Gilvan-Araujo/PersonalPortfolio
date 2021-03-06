import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    fonts: {
        heading: 'Open Sans',
        body: 'Open Sans'
    },
    styles: {
        global: {
            body: {
                bg: 'gray.900',
                color: 'gray.50',
                padding: '5'
            }
        }
    }
})