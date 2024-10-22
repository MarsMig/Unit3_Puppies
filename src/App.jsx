import { useState } from "react";
import "./App.css";
import { puppyList } from "./data.js";
function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log(puppies);
  return (
    <>
      <div className="App">
        <div>
          {puppies.map((puppy) => {
            return <p key={puppy.id}>{puppy.name}</p>;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
