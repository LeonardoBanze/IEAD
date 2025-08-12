import Navbar from "../../components/NavBar";
import Topbar from "../../components/Topbar";
import Footer from "../../components/Footer";
import HeroSlider from "../../components/ChurchHeroSlider";
import WeeklyMessage from "../../components/WeeklyMessage";
import WeeklySchedule from "../../components/WeeklySchedule";
import ChurchEvents from "../../components/ChurchEvents";
import LiveSermons from "../../components/LiveSermons";
import ChurchHeroSlider from "../../components/ChurchHeroSlider";


export default function Home() {
 return (
    <div>
        <Topbar />
        <Navbar />
        <ChurchHeroSlider />
        <WeeklyMessage />
        <WeeklySchedule />
        <ChurchEvents />
        <LiveSermons />
        <Footer/>
    </div>)
}