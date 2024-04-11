/**
 * Design for the home page of the website.
 * This component displays the main content of the home page, including filters and products for sale.
 * @returns {JSX.Element} The JSX element representing the home page.
 */
import Filter from "@/Components/Filter";
import BuyProducts from "@/Components/BuyProducts";
const readline = require('readline');


 /**
  * Functional component for the home page.
  * @returns {JSX.Element} JSX element representing the home page.
  */
export default function Home() {

    return (
        <div className="flex flex-row bg-yellow-600 min-h-screen">
            <Filter />
            <BuyProducts/>
        </div>
    )

    "Code from jack's version. test or ask him if it matters"
    // (
    //     <main style={{
    //         display: 'flex',
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //         backgroundColor:'#D09B2C',
    //         color: 'black'
    //       }}>
    //         {/* Component for filtering products */}
    //         <Filter />
    //         {/* Component for displaying products for sale */}
    //         <BuyProducts />
    //     </main>
    // )
    ;


}
