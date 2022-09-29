import logo from './logo.svg';
import './App.css';
import {
  Route,
  Routes
} from "react-router-dom";
import ListingPage from './Pages/userapp/listings-page';
import Cart from './Pages/userapp/cart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/pizzas" element={<ListingPage />} />
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </div>
  );
}

export default App;
