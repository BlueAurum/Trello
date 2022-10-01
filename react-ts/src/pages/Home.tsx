import React from "react";
import styles from "./home.module.scss";
import Board from "../components/board/Board";

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <Board />
    </div>
  );
};

export default Home;
