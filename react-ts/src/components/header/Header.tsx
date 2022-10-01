import React from "react";
import styles from "./header.module.scss";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setToggleVisibleModal } from "../../store/modalStore/modalStore";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = React.useState<string>("");

  const toggleVisibleModal = (): void => {
    dispatch(setToggleVisibleModal());
  };

  const searchInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  return (
    <header className={styles.header}>
      <Input value={searchValue} onChange={(e) => searchInput(e)} />
      <Button className="addGroupBtn" onClick={() => toggleVisibleModal()}>
        +
      </Button>
    </header>
  );
};

export default Header;
