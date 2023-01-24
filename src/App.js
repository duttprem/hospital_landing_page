import "./App.css";
import "./style.css"
import LandingPage from "./components/NavBarPage/LandingPage/LandingPage";
import NavBarPage from "./components/NavBarPage/NavBarPage";
import ServicePage from "./components/ServicePage/ServicePage";
import InnovativePage from "./components/InnovativePage/InnovativePage";
import OurTeam from "./components/OurTeams";
import Comments from "./components/Comment/Comments";
import Notification from "./components/NotificationBox/Notification";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <NavBarPage />
      <LandingPage/>
      <ServicePage/>
      <InnovativePage/>
      <OurTeam/>
      <Comments/>
      <Notification/>
      <Footer/>
    </div>
  );
}

export default App;
