import "./PricingComponent.css";

interface PriceInfoTypes {
  tittle: string;
  price: string;
  storage: string;
  users: number;
  capacity: string;
  special: boolean;
}

const PricingComponent = (props: PriceInfoTypes) => {
  return (
    <div
      className={
        props.special
          ? "pricing-info-special-container"
          : "pricing-info-container"
      }
    >
      <h2 className="tittle">{props.tittle}</h2>
      <h1>
        <p>
          $ <span className="price">{props.price}</span>
        </p>
      </h1>
      <div className="line"></div>
      <h2 className="infoPackage">{props.storage} Storage</h2>
      <div className="line"></div>
      <h2 className="infoPackage">{props.users} Users Allowed</h2>
      <div className="line"></div>
      <h2 className="infoPackage">Send up to {props.capacity}</h2>
      <div className="line"></div>
      <button>Learn more</button>
    </div>
  );
};

export default PricingComponent;
