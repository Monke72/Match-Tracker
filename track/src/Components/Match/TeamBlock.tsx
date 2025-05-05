import { GameData } from "../../interfaces/interfaces";
import userIcon from "./Icon/avatar.png";

const TeamBlock = ({ el, num }: { el: GameData; num: number }) => {
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
                  Убийств : {player.kills}
                </div>
              </div>
              <div className="match__command-btm">
                <ul className="match__command-btm__list">
                  <li className="match__command-btm__item">
                    Points: +{el.teams[0].matchPoints}
                  </li>
                  <li className="match__command-btm__item">
                    Место: {el.teams[0].place}
                  </li>
                  <li className="match__command-btm__item">Всего убийств:12</li>
                </ul>
              </div>
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default TeamBlock;
