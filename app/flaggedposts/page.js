// Design for the "My Listings" page of the website
import ModeratePosts from "@/Components/ModeratePosts";
import Link from "next/link";

export default function Home() {

    const RowStyle={
        display: 'flex', 
        flexDirection: 'row',
         gap: '8px',
        }

    return (
        <div className="flex flex-col bg-yellow-600 min-h-screen">
            <div style={RowStyle}>
                <Link href={'/mylistings'} className="text-4xl text-black font-semibold p-5">My Listings</Link>
                <div className="text-4xl text-black font-semibold p-5">Flagged Posts</div><br></br>
            </div>
            <ModeratePosts />
        </div>
        );
}