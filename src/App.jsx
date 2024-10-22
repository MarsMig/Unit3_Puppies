import { useState } from "react";
import "./App.css";
import { puppyList } from "./data.js";
function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick(id) {
    // some logic here
    const featuredPup = puppies.find((pup) => pup.id === featPupId);

    console.log(featuredPup);

    console.log("puppy id: ", id);
  }

  console.log(puppies);
  return (
    <>
      <div className="App">
        <div>
          {puppies.map((puppy) => {
            return (
              <p
                onClick={() => {
                  setFeatPupId(puppy.id);
                }}
                key={puppy.id}
              >
                {puppy.name}
              </p>
            );
          })}
        </div>
        {featPupId && <p>{featPupId}</p>}
      </div>
    </>
  );
}

export default App;
