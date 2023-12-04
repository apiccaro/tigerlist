// Design for the browsing page of the website
import Filter from "@/Components/Filter";
import BuyProducts from "@/Components/BuyProducts";

// var titles = ["Hockey Ticket", "Carpool", "Clothing Item", "Service", "Bike", "Tool", "Dogsitting"]
// var descriptions = ["This is the description of a hockey ticket", "This is the description of a Carpool", "This is the description of a clothing item", "This is the description of a service", "This is the description of a bike", "This is the description of a tool", "This is the description of dogsitting"]
// var prices = ["$100", "$35", "$5", "$0", "$10", "$20","$15"]
// var phones = ["(123)456-7890", "(987)654-3210", "(222)111-3333", "(123)789-4560", "(456)123-7890", "(456)789-1230","(777)888-9999"]

export default function Home() {
    return (
        <div className="flex flex-row bg-yellow-600 min-h-screen">
            <Filter />
            <BuyProducts />
        </div>
        );
}