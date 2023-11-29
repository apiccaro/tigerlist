import PNI from "@/Components/PNameImage"
import TB from "@/Components/TopBar"
import PI from "@/Components/PInfo";

export default function Home() {
    return (
        <div className="bg-yellow-600 min-h-screen">
            <TB />
            <PNI className="flex"/>
            <PI />
        </div>
        );
}