import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">

        <div className="fixed flex h-48 w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">

            <p className="text-6xl font-semibold">
                <code className="font-mono font-bold">TigerList</code>
            </p>

        </div>
        
        <Image
              src="/2722150.png"
              alt="Tiger Image"
              accept="image/*"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />

        <div className="fixed flex h-48 w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">

            <p className="text-4xl font-semibold">
                <code className="font-mono font-bold">Product Name</code>
            </p>

        </div>

      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">

        <p className="text-2xl font-semibold">
          <code className="font-mono font-bold">Product Information</code>
          {/* <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>a
            Item description will populate here
          </p> */}

        </p>
        
        <p className="text-2xl font-semibold">
          <code className="font-mono font-bold">Contact</code>
          {/* <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Contact options and resources will populate here
          </p> */}

        </p>

      </div>
    </main>
  )
}
