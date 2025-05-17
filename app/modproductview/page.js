/**
 * Represents the individual product pages of the website.
 * This component displays detailed information about a specific product.
 * @param {Object} searchParams - The search parameters containing the product details.
 * @returns {JSX.Element} The JSX element representing the product page.
 */
// Design for the individual product pages of the website
import PNI from "@/Components/PNameImage"
import ModProductInfo from "@/Components/ModPInfo";

export default function Home({searchParams}) {
    // Destructure searchParams object to extract product details
    const {post_key} = searchParams;
    const {productTitle} = searchParams;
    const {productPrice} = searchParams;
    const {productDescription} = searchParams;
    const {productCategory} = searchParams;
    const {productCondition} = searchParams;
    const {productLocation} = searchParams;
    const {listerEmail} = searchParams;
    const {listerPhone} = searchParams;
    const {productImages} = searchParams;
    const {isActive} = searchParams;
    const {isFlagged} = searchParams;
    const {isBanned} = searchParams;

  return (
    <div className="bg-yellow-600 min-h-screen">
        <div className="flex flex-row gap-2">
            {/* Component to display product name and images */}
            <PNI ID={post_key} title={productTitle} price={productPrice} description={productDescription} category={productCategory} condition={productCondition} location={productLocation} email={listerEmail} phone={listerPhone} images={productImages} flagged={isFlagged}/>
            {/* Component to display additional product information */}
            <ModProductInfo ID={post_key} title={productTitle} price={productPrice} description={productDescription} category={productCategory} condition={productCondition} location={productLocation} email={listerEmail} phone={listerPhone} flagged={isFlagged}/>
        </div>
    </div>
    );
}
