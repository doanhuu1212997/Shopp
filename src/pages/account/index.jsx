import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Order_list from "./components/OrderList";
import Order from "./components/Order";
import Wishlist from "./components/WishList";
import PersonnalInfo from "./components/PersonalInfo";
import Address from "./components/Address";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Payment_List from "./components/PaymentList";
export default function Account(props) {
  const login = useSelector((state) => state.auth.login);
  const navigate = useNavigate();
  useEffect(() => {
    if (!login) {
      navigate("/auth");
    }
  }, [login]);
  const location = useLocation();
  return (
    <section className="pt-7 pb-12">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            {/* Heading */}
            <h3 className="mb-10">My Account</h3>
          </div>
        </div>
        <div className="row">
          <Sidebar />
          <Routes>
            <Route path="/" element={<PersonnalInfo />} />
            <Route path="/order" element={<Order_list />} />
            <Route path="/order/:slug" element={<Order />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/address" element={<Address />} />
            <Route path="/payment" element={<Payment_List />} />
          </Routes>
        </div>
      </div>
    </section>
  );
}
