import styled from "@emotion/styled";

const MainNavBar = styled.div`
  background: #ff6600;
  width: 100%;
  height: 60px;
  border: 1px solid rgb(0, 0, 0);
  position: fixed;
  bottom: 0;

  a {
    text-decoration: none;
    color: black;
    font-family: "iranSansB";
    font-size: 20px;
  }

  a:first-of-type {
    position: absolute;
    right: 130px;
    top: 10px;

    @media (max-width: 1100px) {
      right: 100px;
      font-size: 19px;
    }

    @media (max-width: 950px) {
      right: 80px;
      font-size: 19px;
    }

    @media (max-width: 830px) {
      right: 57px;
      font-size: 19px;
    }

    @media (max-width: 700px) {
      right: 130px;
      font-size: 18px;
    }

    @media (max-width: 550px) {
      right: 101px;
      font-size: 18px;
    }

    @media (max-width: 450px) {
      right: 55px;
      font-size: 18px;
    }

    @media (max-width: 310px) {
      right: 13px;
      font-size: 17px;
    }
  }

  a:last-of-type {
    position: absolute;
    left: 100px;
    top: 11px;

    @media (max-width: 1100px) {
      left: 73px;
      font-size: 19px;
    }

    @media (max-width: 950px) {
      left: 60px;
      font-size: 19px;
    }

    @media (max-width: 830px) {
      left: 40px;
      font-size: 19px;
    }

    @media (max-width: 700px) {
      left: 100px;
      font-size: 18px;
    }

    @media (max-width: 550px) {
      left: 75px;
      font-size: 18px;
    }

    @media (max-width: 450px) {
      left: 30px;
      font-size: 18px;
    }

    @media (max-width: 310px) {
      left: 10px;
      font-size: 17px;
    }
  }

  @media (min-width: 700px) {
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    width: 50%;
    transform: translateX(47%);
  }
`;

const NavBarCircle = styled.div`
  background-color: white;
  width: 95px;
  height: 53px;
  position: absolute;
  left: 50%;
  top: -1px;
  transform: translateX(-50%);
  border-bottom: 1px solid rgb(0, 0, 0);
  border-left: 1px solid rgb(0, 0, 0);
  border-right: 1px solid rgb(0, 0, 0);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
`;

const NavBarButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: -35px;
  transform: translateX(-50%);
  z-index: 100;
  border: 1px solid;
  img {
    height: 50px;
    width: 50px;
  }

  span {
    position: absolute;
    top: 12px;
    right: 10px;
    background-color: red;
    color: white;
    border-radius: 50%;
    width: 23px;
    height: 23px;
    font-family: "iranSansB";
    font-size: 15px;
  }
`;

const MainProductCard = styled.div`
  margin-top: 100px;
  background-color: white;
  /* border: 1px solid #ff6600; */
  background-size: cover;
  position: relative;
  width: 20%;
  height: 500px;
  border-radius: 10px;
  border: 2px solid lightgrey;
  margin: 60px 50px;
  /* box-shadow: 0px 0px 0px grey; */
  transition: box-shadow 0.3s ease-out;
  /* box-shadow: 0.8px 0.9px 3px black; */

  &:last-of-type {
    margin-bottom: 120px;
  }

  &:hover {
    top: -5px;
    transition: top 0.3s ease;
    box-shadow: 1px 3px 20px black;
    transition: box-shadow 0.3s ease-in;
  }

  @media (max-width: 450px) {
    flex-basis: 100%;
    .cardTitle {
      font-size: 22px;
      font-family: "iranSans";
    }
  }

  @media (min-width: 450px) {
    flex-basis: 50%;
    .cardTitle {
      font-size: 22px;
      font-family: "iranSans";
    }
  }

  @media (min-width: 700px) {
    flex-basis: 30%;
  }

  @media (min-width: 1000px) {
    flex-basis: 20%;
  }

  img {
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    padding: 20px;
    width: 100%;
    height: 51%;
    border-bottom: 1px solid lightgray;
  }

  .cardTitle {
    color: black;
    margin-left: 6px;
    font-size: 18px;
    font-weight: bold;
    font-family: "iranSansB";
  }

  .cardPrice {
    position: absolute;
    bottom: 9px;
    /* padding: 8px; */
    left: 10px;
    color: black;
    font-size: 21px;
    font-family: "iranSansB";
  }

  button {
    width: 25px;
    height: 25px;
    position: absolute;
    bottom: 15px;
    right: 5px;
    border-radius: 50%;
    cursor: pointer;
  }

  div {
    background-color: blue;
    position: absolute;
    right: 25px;
    bottom: 15px;

    button {
      width: 25px;
      height: 25px;
      position: absolute;
      bottom: 1px;
      right: 35px;
      border-radius: 50%;
    }

    .pCounter {
      color: black;
      position: absolute;
      bottom: -4px;
      right: 15px;
      font-size: 20px;
      font-family: "iranSansB";
    }
  }
`;

const ShopingCartDiv = styled.div`
  width: 80%;
  /* height: 120px; */
  display: flex;
  background-color: white;
  border: 2px solid lightgrey;
  margin-top: 50px;
  direction: rtl;
  position: relative;
  border-radius: 8px;
  box-shadow: 1px 3px 20px black;
  /* padding: 10px; */

  /* &:last-of-type {
    margin-bottom: 120px;
  } */

  .img-col {
    width: 30%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  .title-col {
    /* padding: 10px 20px; */
    padding-left: 20px;
    padding-top: 10px;
  }

  img {
    width: 90px;
    height: 90px;
    margin: 10px;
  }

  .content-col {
    position: relative;
    width: 70%;
    padding: 12px 0;
    /* margin-right: 5px; */
  }

  .content-col .cardPrice {
    margin-top: 8px;
    color: black;
    font-family: "iranSansB";
  }

  .content-col .cardTitle {
    color: black;
    font-size: 14px;
    font-family: "iranSansB";
  }

  .content-col-counter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    width: 35%;

    @media (min-width: 768px) {
      width: 15%;
    }
  }

  .content-col .delBtn {
    position: absolute;
    left: 5px;
    top: 5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  .content-col .pCounter {
    font-size: 17px;
    font-family: "iranSansB";
  }

  .counter-btn {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    cursor: pointer;
  }

  .content-col .total-price {
    color: black;
    position: absolute;
    bottom: 5px;
    left: 5px;
    font-family: "iranSansB";
  }
`;

const PopupDiv = styled.div`
  position: fixed;
  background: #00000050;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    border-radius: 15px;
    width: 85%;
    margin: 0 auto;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    border: 1px solid #999;
    direction: rtl;
  }

  .popup-p {
    font-family: "iranSansB";
    font-size: 18px;
  }

  .close-btn {
    margin-top: 20px;
    width: 60%;
    padding: 8px 0;
    border: 1px solid grey;
    font-family: "iranSansB";
    font-size: 18px;
    background-color: lightgreen;

    @media (min-width: 768px) {
      width: 20%;
    }
  }
`;

export {
  MainNavBar,
  NavBarCircle,
  NavBarButton,
  MainProductCard,
  ShopingCartDiv,
  PopupDiv,
};
