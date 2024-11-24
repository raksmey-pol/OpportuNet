import Card from "./CardFeature"
import codeImage from "../assets/code.jpg";
import interpreterImage from "../assets/interpreter.jpg";
import exhibitionImage from "../assets/exhibition.jpg";

const cardDescription1 = {
    title: "Software Developer Intern",
    type: "Internship",
    location: "Toul Kork, Phnom Penh",
    imgUrl: codeImage
};

const cardDescription2 = {
    title: "French Interpreter Volunteer",
    type: "Volunteering & Communities Service",
    location: "Koh Pich, Phnom Penh",
    imgUrl: interpreterImage
};

const cardDescription3 = {
    title: "Ink Paint Exhibition",
    type: "Event & Exhibition",
    location: "GIA Tower, Phnom Penh",
    imgUrl: exhibitionImage
};


function FeaturedContents() {
    return (
        <div className="py-4">
            <div className="text-center font-serif py-4">
                <h2 className="text-3xl">Featured Opportunities</h2>
                <p>Explore handpicked opportunities just for you</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-16 px-24">
                <Card cardDescription={cardDescription1}/>
                <Card cardDescription={cardDescription2}/>
                <Card cardDescription={cardDescription3}/>
            </div>
            <div className="text-center font-serif py-4">
                <button className="border-2 rounded-lg px-3 py-1 border-blue-500 bg-blue-500 text-white">View All</button>
            </div>
        </div>
    )
}

export default FeaturedContents;