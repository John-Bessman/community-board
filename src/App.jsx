import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <div className = "intro-text">
       <h1>Top Liberian Food Dishes🇱🇷</h1>
       <h3>Hi, my name is John. When I was given the choice to build a website around community, I thought—why not highlight some of my favorite ethnic dishes that I grew up with? I hope you enjoy browsing through them!
       </h3>
       </div>
       <div className = "cards">
          <div className="card">
          <img src="CassavaL.jpg" className="img" alt="" />
          <h3>Cassava Leaf</h3>
          <button>More Info</button>
          </div>
          <div className="card">
          <img src="JolofRice.png" className="img" alt="Jolof Rice" />
          <h3>Jolof Rice</h3>
          <button onClick>More Info</button>
          </div>
          <div className="card">
          <img src="KidneyBeans.png" className="img" alt="" />
          <h3>Kidney Beans</h3>
          <button >More Info</button>
          </div>
        </div>

        <div className = "cards">
          <div className="card">
          <img src="RedOilPG.jpg" className="img" alt="Jolof Rice" />
          <h3>Red Oil Potato Greens</h3>
          <button onClick>More Info</button>
          </div>
          <div className="card">
          <img src="Gravy.jpg" className="img" alt="" />
          <h3>Gravy</h3>
          <button >More Info</button>
          </div>
          <div className="card">
          <img src="PalavaS.jpg" className="img" alt="" />
          <h3>Plava Saucee</h3>
          <button>More Info</button>
          </div>

        </div>
        <div className = "cards">
          <div className="card">
          <img src="FriedRice.jpg" className="img" alt="Jolof Rice" />
          <h3>Fried Rice</h3>
          <button onClick>More Info</button>
          </div>
          <div className="card">
          <img src="PalmB.jpeg" className="img" alt="" />
          <h3>Palm Butter</h3>
          <button >More Info</button>
          </div>
          <div className="card">
          <img src="RedO.jpg" className="img" alt="" />
          <h3>Red Oil Spinach</h3>
          <button>More Info</button>
          </div>
        </div>
        <div className="cards" style={{ justifyContent: "center" }}>
        <div className="card">
        <img src="PepperS.jpg" className="img" alt="Fufu and Soup" />
       <h3>Pepper Soup</h3>
        <button>More Info</button>
       </div>
</div>
        

      </div>
  );
}

export default App
