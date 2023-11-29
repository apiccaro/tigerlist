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
                
        </aside>
    );
}