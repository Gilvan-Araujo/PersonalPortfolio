import { useEffect, useState } from 'react';

import { Header } from '../components/Header';
import { Showcase } from '../components/Showcase';

type App = {
  id: number,
  name: string,
  url: string
}

export default function Home() {
  const [apps, setApps] = useState<App[]>([])

  return (
    <>
      <Header />
      <Showcase />
    </>
  )
}
