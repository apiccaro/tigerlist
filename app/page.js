import Filter from "@/Components/Filter";
import BuyProducts from "@/Components/BuyProducts";
const readline = require('readline');

export default function Home() {
    return (
        <div className="flex flex-row bg-yellow-600 min-h-screen">
             
            <Filter />
            <BuyProducts />
        </div>
        );
}