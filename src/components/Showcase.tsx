import { SimpleGrid, Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { api } from "../services/api"
import { AppCard } from "./AppCard"

type App = {
    name: string,
    description: string
    image: string,
    link: string
}

export function Showcase() {
    const [apps, setApps] = useState<App[]>([])

    useEffect(() => {
        api.get('apps')
            .then(response => setApps(response.data))
    }, [])

    return (
        <SimpleGrid minChildWidth="320px" spacing={5}>
            {apps.map(app => (
                <AppCard
                    name={app.name}
                    description={app.description}
                    image={app.image}
                    link={app.link}
                />
            ))}
        </SimpleGrid>
    )
}