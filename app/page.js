import Filter from "@/Components/Filter";
import BuyProducts from "@/Components/BuyProducts";

export default function Home() {
    return (
        <main style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:'#D09B2C',
            color: 'black'
          }}>
            <Filter />
            <BuyProducts />
        </main>
        );
}