import BannerWithHighlights from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/header";
import InformationSections from "./components/InfomationSections";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <BannerWithHighlights />
      <InformationSections />
      <Footer />
    </div>
  );
}

export default App;
