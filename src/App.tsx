import './App.css'
import { PricingWithToggle } from './components'
import topBg from "./assets/images/bg-top.svg"

function App() {

  return (
    <div className="principal-container" style={{backgroundImage: `url(${topBg})`}}>
      <header>navbar</header>
      <main>
        <PricingWithToggle/>
      </main>
      <footer>
        Challenge by{" Kenfu03 "}
        <a href="https://www.frontendmentor.io/profile/Kenfu03" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" Kenneth Fuentes "}
        <a target="_blank" href="https://github.com/Kenfu03/PricingComponent-toggle">
          Kenfu03
        </a>
        .
      </footer>
    </div>
  );
}

export default App
