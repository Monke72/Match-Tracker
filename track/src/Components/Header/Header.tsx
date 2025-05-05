import strBtm from "./icons/strBtm.svg";
import errorIcon from "./icons/error.svg";
import refresh from "./icons/Refresh.svg";
import goodIcon from "./icons/good.png";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setStatus } from "../../store/status/statusSlice";
import { fetchData } from "../../store/data/dataSlice";
import { useEffect } from "react";

export type TypeStatus = "all" | "finished" | "live";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [animate, setAnimate] = useState<boolean>(false);
  const [data, setData] = useState<boolean>(false);
  const [reloadText, setReloadText] = useState<string>("");

  const statusDate = useAppSelector((state) => state.status);
  const [disabled, setDisabled] = useState<TypeStatus>(statusDate);
  const { loading, error } = useAppSelector((state) => state.data);
  console.log(loading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [data, dispatch]);

  const handlerReload = () => {
    setAnimate(true);
    setData((prev) => !prev);
    setTimeout(() => {
      setAnimate(false);
      console.log(loading);

      if (!error) {
        setReloadText("Данные успешно обновлены");
      } else {
        setReloadText("Данные не были получены - Ошибка Сервера!");
      }
    }, 500);

    setTimeout(() => {
      setReloadText("");
    }, 4000);
  };

  const handlerStatus = (status: TypeStatus) => {
    dispatch(setStatus(status));
    setOpen(false);
    setDisabled(status);
  };
  const statusUpperCase =
    statusDate.charAt(0).toUpperCase() + statusDate.slice(1);

  return (
    <header className="header container">
      <div className="header__info">
        <h3 className="header__title">Match Tracker</h3>
        <div className="header__status">
          <button
            className="header__status-button"
            onClick={() => setOpen((prev) => !prev)}
          >
            {statusUpperCase}
            <span>
              <img src={strBtm} alt="" />
            </span>
          </button>
          {open && (
            <div className="header__status-choise">
              <ul className="header__status-list">
                <li className="header__status-item">
                  <button
                    className="header__status-button header__status-button__all"
                    onClick={() => handlerStatus("all")}
                    disabled={disabled === "all"}
                  >
                    All
                  </button>
                </li>
                <li className="header__status-item">
                  <button
                    className="header__status-button header__status-button__live"
                    onClick={() => handlerStatus("live")}
                    disabled={disabled === "live"}
                  >
                    Live
                  </button>
                </li>
                <li className="header__status-item">
                  <button
                    className="header__status-button header__status-button__finish"
                    onClick={() => handlerStatus("finished")}
                    disabled={disabled === "finished"}
                  >
                    Finished
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="header__reload">
        {reloadText && (
          <div className="header__reload-info">
            <span>
              <img src={error ? errorIcon : goodIcon} alt="" />
            </span>
            {reloadText}
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
