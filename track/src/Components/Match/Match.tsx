import { GameData } from "../../interfaces/interfaces";
import commandIcon from "./Icon/comand.svg";
import strBottom from "./Icon/strBottom.svg";
import TeamBlock from "../TeamBlock/TeamBlock";
import MatchesCommandsBtm from "../MatchesCommandsBtm/MatchesCommandsBtm";
import { useState } from "react";

const Match = ({ el }: { el: GameData }) => {
  const [open, setOpen] = useState<boolean>(false);
  function getTotalKills(i: number): number {
    const totalKills = el.teams[i].players.reduce(
      (acc, player) => (acc += player.kills),
      0
    );
    return totalKills;
  }
  return (
    <div className="match" onClick={() => setOpen((prev) => !prev)}>
      <div className="match__top">
        <div className="match__command">
          <span>
            <img className="match__command-icon" src={commandIcon} alt="" />
          </span>
          {el.teams[0].nameId}
        </div>

        <div className="match__res">
          <div className="match__score">
            {el.score["Commands №1"]} : {el.score["Commands №2"]}
          </div>
          <div
            className="match__status"
            style={
              el.status !== "finished"
                ? { backgroundColor: "var(--color-green)" }
                : { backgroundColor: "var(--color-red)" }
            }
          >
            {el.status}
          </div>
        </div>

        <div className="match__command">
          <span>
            <img className="match__command-icon" src={commandIcon} alt="" />
          </span>
          {el.teams[1].nameId}
          <button className="match__command-button">
            <img src={strBottom} alt="" />
          </button>
        </div>
      </div>

      {open && (
        <div className="match__info">
          <div className="match__commands">
            <div className="match__commands-one">
              <TeamBlock el={el} num={0} />
              <MatchesCommandsBtm
                el={el}
                num={0}
                getTotalKills={getTotalKills}
              />
            </div>
            <div className="match__commands-too">
              <TeamBlock el={el} num={1} />
              <MatchesCommandsBtm
                el={el}
                num={1}
                getTotalKills={getTotalKills}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Match;
