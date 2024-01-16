import Image from 'next/image'
import { Hero } from './components/Hero'
import { Content } from './components/Content'

export default function Home() {
    return (
        <main className="inline-block w-full">
            <Hero />
            <Content />
        </main>
    )
}
