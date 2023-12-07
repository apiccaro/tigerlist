// Design for the browsing page of the website
import Filter from "@/Components/Filter";
import BuyProducts from "@/Components/BuyProducts";

export default function Home() {

    return (
        <div className="flex flex-row bg-yellow-600 min-h-screen">
            <Filter />
            <BuyProducts />
        </div>
    );
}