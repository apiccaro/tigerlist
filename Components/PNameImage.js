import Image from "next/image";


export default function PNI() {
    return(
        <aside className="flex flex-col gap-2 text-white p-4">

            <h2 className="flex mb-5 text-black text-4xl font-semibold"> Product Name </h2>
            
                <Image
                    src="/ticket.jpeg"
                    alt="Ticket Image"
                    accept="image/*"
                    className="dark:invert"
                    width={400}
                    height={400}
                    priority
                />

                {/* <h3 className="flex gap-1 font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                    Product Details
                </h3>
                <span className="">
                    All product information should exist here
                </span>

                <h3 className="flex gap-1 font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Contanct Information
                </h3>
                <span className="">
                    All contact information should exist here
                </span> */}

        </aside>
    );
}