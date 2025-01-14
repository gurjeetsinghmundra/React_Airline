import './App.css';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar';

 const routes = createBrowserRouter([
  {
      path:"/",
      element:<Navbar/>
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
