import { MainNavBar, NavBarCircle, NavBarButton } from "../assets/style/style";
import { useSelector } from "react-redux";
import ButtonImg from "../assets/images/ButtonIcon.svg"
import ShoppingCard from '../assets/images/shopping-cart.svg'
import RightArrow from "../assets/images/right-arrow.png"
import { useNavigate, useLocation } from "react-router-dom";

const NavBar = (props) => {
  const handlePopoupClick = props.handlePopoupClick;

  const showCounter = useSelector((state) => state.allReducer.cart);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate("/CountinueShoping");
  }

  const handleNextPageClick = () => {
    navigate("/AddressPage");
  }
  
  if (location.pathname === "/CountinueShoping") {
    return (
      <MainNavBar>
        <NavBarButton onClick={handleNextPageClick}>
          <img src={RightArrow} alt="" />
        </NavBarButton>
        <a href="profile">پروفایل</a>
        <a href="tel:09196546346">تماس با ما</a>
        <NavBarCircle />
      </MainNavBar>
    );
  } else if (location.pathname === "/AddressPage") {
    return (
      <MainNavBar>
        <NavBarButton style={{backgroundColor: "#519259", fontFamily: "iranSansB", fontSize: 17}} onClick={handlePopoupClick} type="submitP">
          ثبت خرید
        </NavBarButton>
        <a href="profile">پروفایل</a>
        <a href="tel:09196546346">تماس با ما</a>
        <NavBarCircle />
      </MainNavBar>
    );
  } else {
    return (
      <MainNavBar>
        {showCounter.length > 0 ? (
          <div className="countSpan">
            <NavBarButton onClick={handleClick}>
              <img src={ShoppingCard} alt="" />
              <span>{showCounter.length}</span>
            </NavBarButton>
          </div>
        ) : (
          <NavBarButton>
            <img src={ButtonImg} alt="" />
          </NavBarButton>
        )}
        <a href="profile">پروفایل</a>
        <a href="tel:09196546346">تماس با ما</a>
        <NavBarCircle />
      </MainNavBar>
    );
  }
};

export default NavBar;
