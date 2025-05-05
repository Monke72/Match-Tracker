import strBtm from "./icons/strBtm.svg";
import errorIcon from "./icons/error.svg";
import refresh from "./icons/Refresh.svg";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [reload, setReload] = useState<boolean>(true);
  const [animate, setAnimate] = useState<boolean>(false);

  const handlerReload = () => {
    setReload(true);
    setAnimate(true);
    setTimeout(() => {
      setReload(false);
      setAnimate(false);
    }, 3000);
  };
  return (
    <header className="header container">
      <div className="header__info">
        <h3 className="header__title">Match Tracker</h3>
        <div className="header__status">
          <button
            className="header__status-button"
            onClick={() => setOpen((prev) => !prev)}
          >
            Все статусы
            <span>
              <img src={strBtm} alt="" />
            </span>
          </button>
          {open && (
            <div className="header__status-choise">
              <ul className="header__status-list">
                <li className="header__status-item">
                  <button className="header__status-button header__status-button__live">
                    Live
                  </button>
                </li>
                <li className="header__status-item">
                  <button className="header__status-button header__status-button__finish">
                    Finished
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="header__reload">
        {!reload && (
          <div className="header__reload-info">
            <span>
              <img src={errorIcon} alt="" />
            </span>
            Ошибка: не удалось загрузить информацию
          </div>
        )}
        <button className="header__reload-button" onClick={handlerReload}>
          Обновить
          <span className={`header__reload-rotate ${animate ? "active" : ""}`}>
            <img src={refresh} alt="" />
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
