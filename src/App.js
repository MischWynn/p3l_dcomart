import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Homepage from "./components/homepage";
import Cart from "./components/cart";
import Summary from "./components/summary";
import OrderReview from "./components/orderReview";
import LoginPage from "./components/loginPage";
import InsertPage from "./components/insertItem";
import ShippingInfo from "./components/metodePengiriman";
import Payment from "./components/pembayaran";
import CaraBeli from "./components/beli";
import Contact from "./components/contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/order-review" element={<OrderReview />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/insert" element={<InsertPage />} />
        <Route path="/shipping-information" element={<ShippingInfo />} />
        <Route path="/PaymentInformation" element={<Payment />} />
        <Route path="/HowToBuy" element={<CaraBeli />} />
        <Route path="/ContactUs" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
