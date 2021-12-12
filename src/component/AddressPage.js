const AddressPage = () => {
  return (
    <div>
      <div className="address-info-div">
        <h1 className="address-info-page">مشخصات سفارش</h1>
        <div className="address-div">
          <div className="name-family-div">
            <label className="nameLbl">نام :</label>
            <input type="text" required className="nameInput" />
            <label className="familyLbl">نام خانوادگی :</label>
            <input type="text" required className="familyInput" />
          </div>
          <div className="phone-postcode-div">
            <label className="phoneLbl">شماره موبایل :</label>
            <input type="number" required className="phoneInput" />
            <label className="postcodeLbl">کد پستی :</label>
            <input type="number" required className="postcodeInput" />
          </div>
          <label className="emailLbl">آدرس ایمیل :</label>
          <input type="text" className="emailInput" />
          <label className="addressLbl">آدرس کامل :</label>
          <input type="text" className="addressInput" />
        </div>
      </div>
    </div>
  );
};

export default AddressPage;
