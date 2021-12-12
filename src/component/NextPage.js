import { ShopingCartDiv } from "../assets/style/style"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, minusProduct, removeProduct } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const NextPage = () => {
  const showCounter = useSelector((state) => state.allReducer.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  //dipatch
  const dispatch = useDispatch();

  useEffect(() => {
    let price = 0;

    showCounter.forEach((item) => {
      price += item.fullPrice;
    });

    setTotalPrice(price);
  }, [showCounter, totalPrice, setTotalPrice]);

  if (showCounter.length === 0) {
    navigate("/")
  }

  if (showCounter.length > 0) {
    
  }

  return (
    <div className="next-page">
      {showCounter.map((res) => {
        return (
          <ShopingCartDiv key={res.id}>
            <div className="img-col">
              <img src={res.image} alt="" />
            </div>
            <div className="content-col">
              <div className="title-col">
                <p className="cardTitle">{res.title}</p>
                <p className="cardPrice">{`${res.price}$`}</p>
              </div>
              <div className="content-col-counter">
                <button
                  className="counter-btn btn-add"
                  onClick={() => dispatch(addProduct(res.id))}
                >
                  +
                </button>
                <p className="pCounter">{res.qty}</p>
                <button
                  className="counter-btn btn-minus"
                  onClick={() => dispatch(minusProduct(res.id))}
                >
                  -
                </button>
              </div>
              <p className="total-price">{`قیمت کل : $${res.fullPrice.toFixed(2)}`}</p>
              <button
                className="delBtn"
                onClick={() => dispatch(removeProduct(res.id))}
              >
                X
              </button>
            </div>
          </ShopingCartDiv>
        );
      })}
      <div className="total-price-div">
        <p>{`تعداد کل محصولات : ${showCounter.length}`}</p>
        <p>{`قیمت کل : $${totalPrice.toFixed(2)}`}</p>
        <p>روش ارسال: <span>عادی</span></p>
      </div>
    </div>
  );
};

export default NextPage;
