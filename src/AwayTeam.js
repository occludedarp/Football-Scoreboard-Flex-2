import React from 'react';

const AwayTeam = (props) => {
  return(
    <div className="away">
      <h2 className="away__name">{props.awayName}</h2>
      <div className="away__score">{props.awayScore}</div>
    </div>
  );
}

export default AwayTeam;