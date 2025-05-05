import Match from "../Match/Match";
import { useAppDispatch } from "../../hooks/hooks";
import { fetchData } from "../../store/data/dataSlice";
import { useAppSelector } from "../../hooks/hooks";
import { FC, useEffect } from "react";

const Matches: FC = () => {
  const { items, loading, error } = useAppSelector((state) => state.data);
  console.log(items);
  console.log(loading);
  console.log(error);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <section className="matches container">
      <ul className="matches__list">
        {items.map((el) => (
          <li key={el.gameId}>
            <Match el={el} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Matches;
