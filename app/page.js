import Filter from "@/Components/Filter";
import BuyProducts from "@/Components/BuyProducts";

export default function Home() {
    return (
        <div className="flex flex-row bg-yellow-600 min-h-screen">
            <head>
                <title>TigerList</title>
            </head>
            <Filter />
            <BuyProducts />
        </div>
        );
}