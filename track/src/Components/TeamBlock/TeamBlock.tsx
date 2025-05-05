import { GameData } from "../../interfaces/interfaces";
import userIcon from "./Icon/avatar.png";

interface ITeamBlock {
  el: GameData;
  num: number;
}

const TeamBlock = ({ el, num }: ITeamBlock) => {
  return (
    <div className="match__command">
      <ul className="match__command-top__list">
        <li className="match__command-top__item">
          {el.teams[num].players.map((player) => (
            <div key={player.id} className="match__wrapper">
              <div className="match__command-top__wrapper">
                <div className="match__command-top__user">
                  <img src={userIcon} alt="" />
                  <h6 className="match__command-top__user-name">
                    {player.name}
                  </h6>
                </div>
                <div className="match__command-top__kills">
                  <span className="match__gray">Убийств:</span> {player.kills}
                </div>
              </div>
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default TeamBlock;
