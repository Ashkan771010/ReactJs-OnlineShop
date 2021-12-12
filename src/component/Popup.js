import { PopupDiv } from "../assets/style/style";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeAllProduct } from "../redux/actions";

const Popup = (props) => {
  const setIsOpen = props.setIsOpen;
  const isOpen = props.isOpen;

  //dipatch
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handlecloseBtn = () => {
    navigate("/");
    setIsOpen(!isOpen);
    dispatch(removeAllProduct())
  };

  return (
    <PopupDiv>
      <div className="box">
        <p className="popup-p">
          خرید شما با موفقیت ثبت شد و بسته شما در زمان انتخابی شما به دستتان
          خواهد رسید.
        </p>
        <button className="close-btn" onClick={handlecloseBtn}>
          بستن
        </button>
      </div>
    </PopupDiv>
  );
}
 
export default Popup;
