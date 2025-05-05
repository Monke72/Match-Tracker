import React from "react";
import { GameData } from "../../interfaces/interfaces";

const MatchesCommandsBtm = ({
  el,
  num,
  getTotalKills,
}: {
  el: GameData;
  num: number;
  getTotalKills: (i: number) => number;
}) => {
  return (
    <div className="match__command-btm">
      <ul className="match__command-btm__list">
        <li className="match__command-btm__item">
          <span className="match__gray"> Points: </span>+
          {el.teams[num].matchPoints}
        </li>
        <li className="match__command-btm__item">
          <span className="match__gray"> Место:</span> {el.teams[num].place}
        </li>
        <li className="match__command-btm__item">
          <span className="match__gray"> Всего убийств:</span>
          {getTotalKills(num)}
        </li>
      </ul>
    </div>
  );
};

export default MatchesCommandsBtm;
