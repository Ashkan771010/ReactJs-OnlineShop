import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axiosService from "./axiosService";
import { callApi } from "../redux/actions";
import ProductCardList from "./ProductCardList";

const ProductCard = () => {
  //dipatch
  const dispatch = useDispatch();

  // selector
  const product = useSelector((state) => state.allReducer.product);
  const showCounter = useSelector((state) => state.allReducer.cart);


  //axios request and dispatch action
  const fetchProducts = async () => {
    const response = await axiosService.get("products/").catch((err) => {
      console.log("err", err);
    });
    dispatch(callApi(response.data));
  };

  // useeffect reqeust
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("Cart:", showCounter);
  // console.log(totalPrice);

  return (
    <div className="mainShowCard">
      <p className="productPageTitle">محصولات</p>
      <ProductCardList product={product} showCounter={showCounter} />
    </div>
  );
};

export default ProductCard;
