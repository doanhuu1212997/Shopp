import { useDispatch } from "react-redux";
// import { addCart } from "redux/reducers/cartReducer";
// import { addWish } from "redux/reducers/wishlistReducer";
export default function Product(props) {
  //   let { name, images, real_price_text } = props;
  //   let imgage1 = images?.[0]?.medium_url;
  //   let imgage2 = images?.[1]?.medium_url;
  let dispatch = useDispatch();

  return (
    <div className="card mb-7">
      {/* Badge */}
      <div className="badge badge-white card-badge card-badge-left text-uppercase">
        New
      </div>
      {/* Image */}
      <div className="card-img">
        {/* Image */}
        <a className="card-img-hover" href="product.html">
          {imgage1 && (
            <img
              className="card-img-top card-img-font "
              src={imgage1}
              alt="..."
            />
          )}
          {imgage2 && (
            <img
              className="card-img-top card-img-back card-img-back1"
              src={imgage2}
              alt="..."
            />
          )}
        </a>
        {/* Actions */}
        <div className="card-actions">
          <span className="card-action">
            <button
              className="btn btn-xs btn-circle btn-white-primary"
              data-toggle="modal"
              data-target="#modalProduct"
            >
              <i className="fe fe-eye" />
            </button>
          </span>
          <span className="card-action">
            <button
              className="btn btn-xs btn-circle btn-white-primary"
              data-toggle="button"
              onClick={() => dispatch(addCart(props))}
            >
              <i className="fe fe-shopping-cart" />
            </button>
          </span>
          <span className="card-action">
            <button
              className="btn btn-xs btn-circle btn-white-primary"
              data-toggle="button"
              onClick={() => dispatch(addWish(props))}
            >
              <i className="fe fe-heart" />
            </button>
          </span>
        </div>
      </div>
      {/* Body */}
      <div className="card-body px-0">
        {/* Category */}
        <div className="font-size-xs">
          <a className="text-muted" href="shop.html">
            Shoes
          </a>
        </div>
        {/* Title */}
        <div className="font-weight-bold">
          <a className="text-body" href="product.html">
            {name}
          </a>
        </div>
        {/* Price */}
        <div className="font-weight-bold text-muted">{real_price_text} VND</div>
      </div>
    </div>
  );
}
