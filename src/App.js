import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import HomeTeam from "./HomeTeam";
import AwayTeam from "./AwayTeam";
import Timer from "./Timer";

function App() {
let [homeScoreIs, updateHomeScore] = useState(32);

let [awayScoreIs, updateAwayScore] = useState(32);

let [homeName, updateHomeName] = useState('Lions');

let [awayName, updateAwayName] = useState('Tigers');

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <HomeTeam homeScore={homeScoreIs} homeName={homeName}/>
          <Timer />
          <AwayTeam awayScore={awayScoreIs} awayName={awayName}/>
        </div>

        <BottomRow />
      </section>

      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => updateHomeScore(homeScoreIs + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => updateHomeScore(homeScoreIs + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => updateAwayScore(awayScoreIs + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => updateAwayScore(awayScoreIs + 3)}>Away Field Goal</button>
        </div>


      </section>
    </div>
  );
}

export default App;
