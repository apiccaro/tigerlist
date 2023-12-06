import PNI from "@/Components/PNameImage"
import PI from "@/Components/PInfo";

export default function Home() {
    return (
        <div className="bg-yellow-600 min-h-screen">
            <div className="flex flex-row gap-2">
                <PNI className="flex"/>
                <PI />
            </div>
           
        </div>
        );
}