// Design for the individual product pages of the website
import PNI from "@/Components/PNameImage"
import ProductInfo from "@/Components/PInfo";

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
  const {isActive} = searchParams;
  const {isFlagged} = searchParams;
  const {isBanned} = searchParams;

  return (
    <main style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#D09B2C',
      color: 'black'
    }}>
        <div className="flex flex-row gap-2">
          <PNI ID={listingID} title={productTitle} price={productPrice} description={productDescription} category={productCategory} condition={productCondition} location={productLocation} email={listerEmail} phone={listerPhone} images={productImages} active={isActive} flagged={isFlagged} banned={isBanned}/>
          <ProductInfo ID={listingID} title={productTitle} price={productPrice} description={productDescription} category={productCategory} condition={productCondition} location={productLocation} email={listerEmail} phone={listerPhone} active={isActive} flagged={isFlagged} banned={isBanned}/>
        </div>
      </main>
      );
}