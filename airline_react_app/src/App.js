import './App.css';
import './components/HeroSection.module.css'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar';
// import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Seats from './components/Seats';
import User from './components/User/UserForm';
import Flight from './components/Flight/Flight';
import About from './components/About';
import NotFound from './components/NotFound';
import Destinations from './components/Destinations';
import Footer from './components/Footer';
import AllUser from './components/User/AllUser';
import FlightForm from './components/Flight/FlightForm';
import BookingSeats from './components/Booking/BookingSeats';
import Ticket from './components/Booking/Ticket';
import UserForm from './components/User/UserForm';
import Users from './components/User/User';
import FlightDetails from './components/Flight/FlightDetails';
import ShowingBooking from './components/Booking/ShowingBooking';



 const routes = createBrowserRouter([
  {
      path:"/",
      element:<><Navbar/> <HeroSection/><About/><Seats/><Destinations/><Footer/></>
  },
  {
      path:"/register",
      element:<><Navbar/><UserForm/><Users/></>
  },
  {
    path:"/flight",
    element:<><Navbar/><Flight/></>
  },
  {
    path:"/booking",
    element:<><Navbar/><BookingSeats/></>
  },
  {
    path:"/ticket",
    element:<><Navbar/><Ticket/></>
  },
  {
    path:"flight/:flightNumber",
    element:<><Navbar/><FlightDetails/></>
  },
  {
    path:"booking/:flightNumber",
    element:<><Navbar/><ShowingBooking/></>
  },

  {
    path: "*",  //jitne routes banaye hai usko chordke saare
    element: <NotFound />
  },
  
  
])


function App() {
  return (
    <div className="App">
    
    <RouterProvider router={routes}/>

    </div>
  );
}

export default App;



