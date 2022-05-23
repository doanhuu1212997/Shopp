import { useDispatch, useSelector } from "react-redux";
import widthPriceFormat from "hoc/widthPriceFormat";
import ProductItem from "./compoment/ProductItem";
export default function Wishlist() {
  // let wishList = useSelector((state) => state.wishList);

  return (
    <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
      {/* Products */}
      <div className="row">
        {/* Item */}
        {/* {wishList?.listWish.map((item, i) => (
          <div className="col-6 col-md-4" key={item._id}>
            {widthPriceFormat(ProductItem, item)}
          </div>
        ))} */}
      </div>
      {/* Pagination */}
    </div>
  );
}
