import SellProducts from "@/Components/SellProducts";

export default function Home() {
    return (
        <div className="flex flex-col bg-yellow-600 min-h-screen">
            <div className="text-4xl text-black font-semibold p-5">My Listings</div><br></br>
            <SellProducts />
        </div>
        );
}