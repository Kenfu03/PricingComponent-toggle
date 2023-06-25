import "./App.css";
import { PricingWithToggle, Navbar } from "./components";
import { topBg, bottonBg } from "./assets";

function App() {
  return (
    <div className="principal-container" style={{ backgroundImage: `url(${topBg}),url(${bottonBg})` }}>
      <header>
        <Navbar />
      </header>
      <main>
        <PricingWithToggle />
      </main>
      <footer>
        Challenge by{" Kenfu03 "}
        <a href="https://www.frontendmentor.io/profile/Kenfu03" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" Kenneth Fuentes "}
        <a
          target="_blank"
          href="https://github.com/Kenfu03/PricingComponent-toggle"
        >
          GitHub
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
