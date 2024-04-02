import Filter from "@/Components/Filter";
import SellProducts_new from "@/Components/SellProducts_new";
const readline = require('readline');

//Literally just copied the main page.js, replacing buyproducts with sellproducts

export default function Home() {

    return (
        <div className="flex flex-row bg-yellow-600 min-h-screen">
            <Filter />
            <SellProducts_new/>
        </div>
    );


}

