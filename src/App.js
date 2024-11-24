import "./App.css";
import Nav from "./components/Nav";
import Search from "./components/Search";
import FeaturedContents from "./components/FeaturedContents";
import LatestContents from "./components/LatestContents";
import PopularContent from "./components/PopularContents";
import PostContents from "./components/PostContents";
import Footer from "./components/Footer";
import Test from "./components/Test"

function App() {
  return (
    <div>
      <Nav/>
      <Search/>
      <FeaturedContents/>
      <LatestContents/>
      <PopularContent/>
      <PostContents/>
      <Footer/>
    </div>
  );
}

export default App;
