import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <div>
            Home
            <Link href={"/about"}>ABout</Link>
        </div>
    )
}
