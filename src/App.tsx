import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	return (
		<div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
			<Navbar />
			<SearchBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/collection" element={<Collection />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/place-order" element={<PlaceOrder />} />
				<Route path="/login" element={<Login />} />
				<Route path="/product/:productId" element={<Product />} />
				<Route path="/orders" element={<Orders />} />
			</Routes>
			<ToastContainer position="bottom-right"/>
			<Footer />
		</div>
	);
};

export default App;
