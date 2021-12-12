import { MainProductCard } from "../assets/style/style";
import { useDispatch } from "react-redux";
import { addProduct, minusProduct, } from "../redux/actions";

const ProductCardList = (props) => {
  const product = props.product;
  const showCounter = props.showCounter;
  //dipatch
  const dispatch = useDispatch();

  return (
    <div className="showCard">
      {product.map((res) => {
        return (
          <MainProductCard key={res.id}>
            <img src={res.image} alt={`img ${res.id}`} />
            <p className="cardTitle">{res.title}</p>
            <p className="cardPrice">{`${res.price}$`}</p>
            <button onClick={() => dispatch(addProduct(res.id))}>+</button>
            <div
              style={{
                display:
                  showCounter.find((product) => product.id === res.id)?.qty > 0
                    ? "inline-block"
                    : "none",
              }}
            >
              <p className="pCounter">
                {showCounter.find((baketItem) => baketItem.id === res.id)?.qty}
              </p>
              <button onClick={() => dispatch(minusProduct(res.id))}>-</button>
            </div>
          </MainProductCard>
        );
      })}
    </div>
  );
};

export default ProductCardList;
