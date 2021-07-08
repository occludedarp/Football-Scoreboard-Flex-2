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

const homeTouchdown = () => {
  updateHomeScore(homeScoreIs + 7)
}

const homeFieldgoal = () => {
  updateHomeScore(homeScoreIs + 3)
}

const awayTouchdown = () => {
  updateAwayScore(awayScoreIs + 7)

}
const awayFieldgoal = () => {
  updateAwayScore(awayScoreIs + 3)
}

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
          <button className="homeButtons__touchdown" onClick={homeTouchdown}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={homeFieldgoal}>Home Field Goal</button>
        </div>

        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={awayTouchdown}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={awayFieldgoal}>Away Field Goal</button>
        </div>

      </section>
    </div>
  );
}

export default App;
