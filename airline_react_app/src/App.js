import './App.css';
import './components/HeroSection.module.css'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Seats from './components/Seats';
import User from './components/User/User';
import Flight from './components/Flight/Flight';




 const routes = createBrowserRouter([
  {
      path:"/",
      element:<><Navbar/> <HeroSection/><Seats/><Header/></>
  },
  {
      path:"/register",
      element:<><Navbar/><User/></>
  },
  {
    path:"/flight",
    element:<><Navbar/><Flight/></>
  }
])


function App() {
  return (
    <div className="App">
    
    <RouterProvider router={routes}/>

    </div>
  );
}

export default App;



