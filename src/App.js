import './App.css';
import Home from './Screens/Home/Home'
import Destination from './Screens/Destination/Destination';
import Crew from './Screens/Crew/Crew';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Technology from './Screens/Technology/Technology';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
     <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path={"/"} element={<Home />}/>  
        <Route path={"/Destination"} element= {<Destination />}/>
        <Route path={"/Crew"} element={<Crew />}/>
        <Route path={"/Technology"} element={<Technology/>}/>
      </Routes>
     </Router>
  );
}

export default App;
