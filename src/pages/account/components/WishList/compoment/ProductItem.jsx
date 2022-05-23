// import React from "react";
// import { removeWish } from "redux/reducers/wishlistReducer";
// import { useDispatch, useSelector } from "react-redux";
// export default function ProductItem(props) {
//   let dispatch = useDispatch();
//   let { name, images, real_price_text } = props;
//   let imgage1 = images?.[0]?.medium_url;
//   let imgage2 = images?.[1]?.medium_url;
//   return (
//     <div className="card mb-7">
//       {/* Image */}
//       <div className="card-img">
//         {/* Action */}
//         <button
//           className="btn btn-xs btn-circle btn-white-primary card-action card-action-right"
//           onClick={() => dispatch(removeWish(props))}
//         >
//           <i className="fe fe-x" />
//         </button>
//         {/* Button */}
//         <button
//           className="btn btn-xs btn-block btn-dark card-btn"
//           data-toggle="modal"
//           data-target="#modalProduct"
//         >
//           <i className="fe fe-eye mr-2 mb-1" /> Quick View
//         </button>
//         {/* Image */}
//         {imgage1 && (
//           <img
//             className="card-img-top card-img-font "
//             src={imgage1}
//             alt="..."
//           />
//         )}
//         {imgage2 && (
//           <img
//             className="card-img-top card-img-back card-img-back1"
//             src={imgage2}
//             alt="..."
//           />
//         )}
//       </div>
//       {/* Body */}
//       <div className="card-body font-weight-bold text-center">
//         <a className="text-body" href="product.html">
//           {name}
//         </a>{" "}
//         <br />
//         <span className="text-muted">{real_price_text} VNĐ</span>
//       </div>
//     </div>
//   );
// }
