import React, { useState } from "react"
import "./index.css"
import Heading from "./components/heading";
import BirthdayList from "./components/birthdayList";
import EmptyList from "./components/emptyList";
function App() {
  const [clicked, setClicked] = useState(false)
  const handleClickedButton = () => {
    setClicked(!clicked)
  }
  return (
    <div className="background">
      <div>

      </div>
      <div className="mid-div container">
        {clicked ? <EmptyList title2="0 Birthdays Today"/> : <Heading title="5 Birthdays Today"/>}
        <div>
          {clicked ? <EmptyList /> : <BirthdayList />}
        </div>
          <button className="btn-styling" onClick={handleClickedButton}>{clicked ? "Undo Clear" : "Clear All"}</button>
      </div>
    </div>
  );
}

export default App;
