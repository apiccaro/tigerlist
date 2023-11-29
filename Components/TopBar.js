import Image from 'next/image'
import Link from 'next/link';

export default function TB() {
    return(
        <aside className="text-white p-4 text-6xl font-bold mb-5 bg-black">
            <Link href={'/listview'} className="flex">
                TigerList
                <Image
                src="/46710.svg"
                alt="Tiger Image"
                accept="image/*"
                className="dark:invert"
                width={200}
                height={50}
                priority
                />
            </Link>
        </aside>
    );
}