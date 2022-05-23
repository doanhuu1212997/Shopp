import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "redux/authSlice";
export default function Sidebar() {
  let dispatch = useDispatch();

  function btn_logout() {
    dispatch(logout());
  }

  return (
    <div className="col-12 col-md-3">
      {/* Nav */}
      <nav className="mb-10 mb-md-0">
        <div className="list-group list-group-sm list-group-strong list-group-flush-x">
          <NavLink
            className="list-group-item list-group-item-action dropright-toggle "
            to="/account/order"
          >
            Orders
          </NavLink>
          <NavLink
            className="list-group-item list-group-item-action dropright-toggle "
            to="/account/wishlist"
          >
            Widhlist
          </NavLink>

          <NavLink
            className="list-group-item list-group-item-action dropright-toggle "
            to="/account/address"
          >
            Addresses
          </NavLink>
          <NavLink
            className="list-group-item list-group-item-action dropright-toggle"
            to="/account/payment"
          >
            Payment Methods
          </NavLink>
          <NavLink
            className="list-group-item list-group-item-action dropright-toggle"
            to="/account"
            Ư
          >
            Personal Info
          </NavLink>
          <Link
            className="list-group-item list-group-item-action dropright-toggle"
            to=""
            onClick={btn_logout}
          >
            Logout
          </Link>
        </div>
      </nav>
    </div>
  );
}
