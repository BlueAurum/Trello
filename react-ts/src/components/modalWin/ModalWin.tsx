import React from "react";
import styles from "./modalWin.module.scss";
import Form from "../form/Form";
import { useSelector } from "react-redux/es/exports";
import { RooState } from "../../store/store";

const ModalWin: React.FC = () => {
  const { modalStore } = useSelector((state: RooState) => state);

  const getActiveClass = React.useMemo((): string => {
    return modalStore.toggleVisible ? "active" : "";
  }, [modalStore]);

  return (
    <div className={`${styles.overlay} ${styles[getActiveClass]}`}>
      <Form cls={"modalForm"} />
    </div>
  );
};

export default ModalWin;
