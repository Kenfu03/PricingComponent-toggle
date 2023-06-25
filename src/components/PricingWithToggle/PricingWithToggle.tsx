import { useState } from "react";
import "./PricingWithToggle.css";
import { PricingComponent } from "../../containers";


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
  const [anual, setAnual] = useState<boolean>(true);
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

  return (
    <div
      className="pricing-container"
    >
      <div className="pricing-tittle-container">
        <h1>Our Pricing</h1>
        <div className="button-container">
          <p>Annually</p>
          <div
            className="switch"
            style={{ justifyContent: anual ? "flex-start" : "flex-end" }}
            onClick={() => {
              anual ? monthlyPrice() : anuallyPrice();
              setAnual(!anual);
            }}
          >
            <div className="circle"></div>
          </div>
          <p>Monthly</p>
        </div>
      </div>
      <div className="pricing-data-container">
        {pricingObjects.map((container: PriceInfoTypes, i: number) => (
          <PricingComponent
            key={i}
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
