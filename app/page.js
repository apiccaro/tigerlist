import Filter from "@/Components/Filter";
import BuyProducts from "@/Components/BuyProducts";
import { testUserEmail } from "./server/cas.js"

export default function Home() {
    console.log(userEmail); 
    return (
        <div className="flex flex-row bg-yellow-600 min-h-screen">
             <p>THE EMAIL IS:      {testUserEmail}     AND THAT SURE IS THE EMAIL</p>
            <Filter />
            <BuyProducts />
        </div>
        );
}