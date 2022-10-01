import React from "react";
import styles from "./board.module.scss";
import { useSelector } from "react-redux";
import { RooState } from "../../store/store";
import GroupItem from "../boardGroupItem/GroupItem";

const Board: React.FC = () => {
  const { groupStore } = useSelector((state: RooState) => state);

  return (
    <div className={styles.board}>
      {groupStore &&
        groupStore.map((item) => <GroupItem key={item.id} {...item} />)}
    </div>
  );
};

export default Board;
