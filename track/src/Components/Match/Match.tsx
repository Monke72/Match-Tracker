import { GameData } from "../../interfaces/interfaces";
import commandIcon from "./Icon/comand.svg";
import strBottom from "./Icon/strBottom.svg";
import TeamBlock from "./TeamBlock";

const Match = ({ el }: { el: GameData }) => {
  return (
    <div className="match">
      <div className="match__top">
        <div className="match__command">
          <span>
            <img className="match__command-icon" src={commandIcon} alt="" />
          </span>
          {el.teams[0].nameId}
        </div>
        <div className="match__score">
          {el.score["Commands №1"]} : {el.score["Commands №2"]}
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
      <div className="match__info">
        <div className="match__commands">
          <TeamBlock el={el} num={0} />
          <TeamBlock el={el} num={1} />
        </div>
      </div>
    </div>
  );
};

export default Match;
