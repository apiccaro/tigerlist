// Design for the individual product pages of the website
import PNI from "@/Components/PNameImage"
import ModProductInfo from "@/Components/ModPInfo";

export default function Home({searchParams}) {
    const {listingID} = searchParams;
    const {productTitle} = searchParams;
    const {productPrice} = searchParams;
    const {productDescription} = searchParams;
    const {productCategory} = searchParams;
    const {productCondition} = searchParams;
    const {productLocation} = searchParams;
    const {listerEmail} = searchParams;
    const {listerPhone} = searchParams;
    const {productImages} = searchParams;
    const {isFlagged} = searchParams;

  return (
    <div className="bg-yellow-600 min-h-screen">
        <div className="flex flex-row gap-2">
            <PNI ID={listingID} title={productTitle} price={productPrice} description={productDescription} category={productCategory} condition={productCondition} location={productLocation} email={listerEmail} phone={listerPhone} images={productImages} flagged={isFlagged}/>
            <ModProductInfo ID={listingID} title={productTitle} price={productPrice} description={productDescription} category={productCategory} condition={productCondition} location={productLocation} email={listerEmail} phone={listerPhone} flagged={isFlagged}/>
        </div>
    </div>
    );
}