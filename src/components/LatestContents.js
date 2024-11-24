import CardLatest from "./CardLatest";
import codeImg from "../assets/codingClu.jpg";
import paintImg from "../assets/paintMas.jpg";
import logImg from "../assets/logisticVol.jpg";
import marketImg from "../assets/marketInt.png";

const cardLatestOpp1 = {
  title: "Coding Club",
  type: "Networking & Education",
  description:
    "Welcome to the Coding Club! Our mission is to foster a community of passionate programmers and tech enthusiasts.",
  byUser: "Code For All",
  imgUrl: codeImg,
};
const cardLatestOpp2 = {
  title: "Painting Masterclass",
  type: "Art & Education",
  description:
    "Join our Painting Masterclass to unlock your artistic potential!",
  byUser: "Inkers",
  imgUrl: paintImg,
};
const cardLatestOpp3 = {
  title: "Logistic Volunteering",
  type: "Volunteering & Communities Service",
  description:
    "Join our Logistics Volunteering team and make a significant impact behind the scenes!",
  byUser: "Vekcha Festival",
  imgUrl: logImg,
};
const cardLatestOpp4 = {
  title: "Marketing Internship",
  type: "Internships & Paid",
  description:
    "Kickstart your career with our Marketing Internship! This internship offers a hands-on experience in the dynamic field of marketing.",
  byUser: "Ktes Tnoat Motor",
  imgUrl: marketImg,
};

function LatestContents() {
  return (
    <div className="py-4">
      <div className="text-center font-serif py-4">
        <h2 className="text-3xl">Latest Opportunities</h2>
        <p>Stay up-to-date with the newest opportunities available</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-5 px-24">
        <CardLatest detail={cardLatestOpp4} />
        <CardLatest detail={cardLatestOpp2} />
        <CardLatest detail={cardLatestOpp3} />
        <CardLatest detail={cardLatestOpp1} />
      </div>
      <div className="text-center font-serif py-4">
        <button className="border-2 rounded-lg px-3 py-1 border-blue-500 bg-blue-500 text-white">
          View All
        </button>
      </div>
    </div>
  );
}

export default LatestContents;
