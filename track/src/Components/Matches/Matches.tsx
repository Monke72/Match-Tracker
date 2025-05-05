import Match from "../Match/Match";
import { useAppDispatch } from "../../hooks/hooks";
import { fetchData } from "../../store/data/dataSlice";
import { useAppSelector } from "../../hooks/hooks";
import { FC, useEffect } from "react";
import { TypeStatus } from "../Header/Header";

const Matches: FC = () => {
  const { items, loading, error } = useAppSelector((state) => state.data);
  const status: TypeStatus = useAppSelector((state) => state.status);
  console.log(items);
  console.log(loading);
  console.log(error);
  console.log(status);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <section className="matches container">
      <ul className="matches__list">
        {loading ? (
          <div className="matches__skeleton"></div>
        ) : (
          <>
            {status === "all" &&
              items.map((el) => (
                <li key={el.gameId}>
                  <Match el={el} />
                </li>
              ))}
            {status === "finished" &&
              items
                .filter((el) => el.status === "finished")
                .map((el) => (
                  <li key={el.gameId}>
                    <Match el={el} />
                  </li>
                ))}
            {status === "live" &&
              items
                .filter((el) => el.status === "live")
                .map((el) => (
                  <li key={el.gameId}>
                    <Match el={el} />
                  </li>
                ))}
          </>
        )}
      </ul>
    </section>
  );
};

export default Matches;
