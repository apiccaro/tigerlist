// Design for the "My Listings" page of the website
import SellProducts from "@/Components/SellProducts";
import Link from "next/link";

export default function Home() {

    const RowStyle={
        display: 'flex', 
        flexDirection: 'row',
         gap: '8px',
        }

    const moderators = ['j_dresser@coloradocollege.edu']
    const currentUser = 'j_dresser@coloradocollege.edu'
    //const currentUser = 's_treat@coloradocollege.edu'

    const showFlaggedPostsLink = moderators.includes(currentUser);

    return (
        <div className="flex flex-col bg-yellow-600 min-h-screen">
            <div style={RowStyle}>
                <div className="text-4xl text-black font-semibold p-5">My Listings</div><br></br>
                {showFlaggedPostsLink && (
                    <Link href={'/flaggedposts'} className="text-4xl text-black font-semibold p-5">Flagged Posts</Link>
                )}
            </div>
            <SellProducts />
        </div>
        );
}