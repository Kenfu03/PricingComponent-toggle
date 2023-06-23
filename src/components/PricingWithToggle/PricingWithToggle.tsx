import { useState } from "react";
import "./PricingWithToggle.css";
import { PricingComponent } from "../../containers";


interface StyleTypes {
  justifyContent: "flex-start" | "flex-end";
}

interface PriceInfoTypes {
  tittle: string;
  storage: string;
  users: number;
  capacity: string;
  price: string;
}

const PricingWithToggle = () => {
  const [basicPrice, setBasicPrice] = useState<string>("199.99");
  const [professionalPrice, setProfessionalPrice] = useState<string>("249.99");
  const [masterPrice, setMasterPrice] = useState<string>("399.99");
  const [buttonStyle, setButtonStyle] = useState<StyleTypes>({
    justifyContent: "flex-start",
  });
  const pricingObjects: PriceInfoTypes[] = [
    {
      tittle: "Basic",
      storage: "500 GB",
      users: 2,
      capacity: "3 GB",
      price: basicPrice,
    },
    {
      tittle: "Professional",
      storage: "1 TB",
      users: 5,
      capacity: "10 GB",
      price: professionalPrice,
    },
    {
      tittle: "Master",
      storage: "2 TB",
      users: 10,
      capacity: "20 GB",
      price: masterPrice,
    },
  ];

  const anuallyPrice = () => {
    setBasicPrice("199.99");
    setProfessionalPrice("249.99");
    setMasterPrice("399.99");
  };

  const monthlyPrice = () => {
    setBasicPrice("19.99");
    setProfessionalPrice("24.99");
    setMasterPrice("39.99");
  };

  const handleClick = () => {
    if (buttonStyle.justifyContent === "flex-start") {
      setButtonStyle({
        justifyContent: "flex-end",
      });
      monthlyPrice();
    } else {
      setButtonStyle({
        justifyContent: "flex-start",
      });
      anuallyPrice();
    }
  };
  return (
    <div className="pricing-container">
      <div className="pricing-tittle-container">
        <h1>Our Pricing</h1>
        <div className="button-container">
          <p>Annually</p>
          <div
            className="switch"
            style={buttonStyle}
            onClick={() => handleClick()}
          >
            <div className="circle"></div>
          </div>
          <p>Monthly</p>
        </div>
      </div>
      <div className="pricing-data-container">
        {pricingObjects.map((container: PriceInfoTypes) => (
          <PricingComponent
            tittle={container.tittle}
            price={container.price}
            storage={container.storage}
            users={container.users}
            capacity={container.capacity}
            special={container.tittle === "Professional" ? true : false}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingWithToggle;
