import './App.css';
import Cakes from './Components/Dashbord/Cakes/Cakes';
import Footer from './Components/Dashbord/Footer/Footer';
import Homes from './Components/Dashbord/Homes/Homes';
import Navigation from './Components/Dashbord/Navigation/Navigation';
import OurRecepi from './Components/Dashbord/OurRecepi/OurRecepi';
import Special from './Components/Dashbord/Special/Special';

function App() {
  return (
    <>
      <Navigation />
      <Homes />
      <OurRecepi />
      <Cakes />
      <Special />
      <Footer />
    </>
  );
}

export default App;
