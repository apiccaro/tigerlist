/**
 * Design for the individual product pages of the website.
 * This component displays detailed information about a specific product.
 * @param {Object} searchParams - The search parameters containing information about the product.
 * @param {string} searchParams.productID - The ID of the product.
 * @param {string} searchParams.productTitle - The title of the product.
 * @param {number} searchParams.productPrice - The price of the product.
 * @param {string} searchParams.productDescription - The description of the product.
 * @param {string} searchParams.productCategory - The category of the product.
 * @param {string} searchParams.productCondition - The condition of the product.
 * @param {string} searchParams.productLocation - The location of the product.
 * @param {string} searchParams.listerEmail - The email of the product lister.
 * @param {string} searchParams.listerPhone - The phone number of the product lister.
 * @param {Array<string>} searchParams.productImages - The images of the product.
 * @param {boolean} searchParams.isActive - Whether the product listing is active.
 * @param {boolean} searchParams.isFlagged - Whether the product listing is flagged.
 * @param {boolean} searchParams.isBanned - Whether the product listing is banned.
 * @returns {JSX.Element} The JSX element representing the individual product page.
 */
 import PNI from "@/Components/PNameImage";
 import ProductInfo from "@/Components/PInfo";
 
 /**
  * Functional component for displaying individual product pages.
  * @param {Object} props - Component properties.
  * @param {Object} props.searchParams - Search parameters containing information about the product.
  * @returns {JSX.Element} JSX element representing the individual product page.
  */
 export default function Home({searchParams}) {
   // Destructure searchParams object
   const {
     productID,
     productTitle,
     productPrice,
     productDescription,
     productCategory,
     productCondition,
     productLocation,
     listerEmail,
     listerPhone,
     productImages,
     isActive,
     isFlagged,
     isBanned
   } = searchParams;
 
   return (
     <main style={{
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor:'#D09B2C',
       color: 'black'
     }}>
       <div className="flex flex-row gap-2">
         {/* Component for displaying product name and images */}
         <PNI
           listingID={productID}
           title={productTitle}
           price={productPrice}
           description={productDescription}
           category={productCategory}
           condition={productCondition}
           location={productLocation}
           email={listerEmail}
           phone={listerPhone}
           images={productImages}
           active={isActive}
           flagged={isFlagged}
           banned={isBanned}
         />
         {/* Component for displaying detailed product information */}
         <ProductInfo
           listingID={productID}
           title={productTitle}
           price={productPrice}
           description={productDescription}
           category={productCategory}
           condition={productCondition}
           location={productLocation}
           email={listerEmail}
           phone={listerPhone}
           active={isActive}
           flagged={isFlagged}
           banned={isBanned}
         />
       </div>
     </main>
   );
 }
 