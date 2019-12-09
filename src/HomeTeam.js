import React from 'react';

const HomeTeam = (props) => {
  return(
    <div className="home">
      <h2 className="home__name">{props.homeName}</h2>
      <div className="home__score">{props.homeScore}</div>
    </div>
  );
}

export default HomeTeam;