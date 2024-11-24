import CardPopular from "./CardPopular";
import sectionPicture from "../assets/section.png"

const popularCard1 = {
    icon: "🎓",
    title: "Internships",
    type: "Paid & Unpaid"
}

const popularCard2 = {
    icon: "🤝",
    title: "Volunteering",
    type: "Community Service"
}

const popularCard3 = {
    icon: "🎨",
    title: "Events",
    type: "Upcoming Local Gathering"
}

const popularCard4 = {
    icon: "📚",
    title: "EXhibitions",
    type: "Art & Book Displays"
}

function PopularContent() {
    return (
        <div>
            <div>
                <h1 className="text-4xl text-center font-bold font-serif">Popular Categories</h1>
            </div>
            <div className="grid lg:grid-cols-4 gap-20 p-10 text-center">
                <CardPopular detail={popularCard1}/>
                <CardPopular detail={popularCard2}/>
                <CardPopular detail={popularCard3}/>
                <CardPopular detail={popularCard4}/>
            </div>
            <div className="w-full"> 
                <img src={sectionPicture} className="w-full"></img>
            </div>
        </div>
    )
}

export default PopularContent;