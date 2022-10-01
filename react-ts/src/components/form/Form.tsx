import React from "react";
import Button from "../UI/Button/Button";
import styles from "./form.module.scss";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { setToggleVisibleModal } from "../../store/modalStore/modalStore";
import { addGroup } from "../../store/groupStore/groupStore";
import Input from "../UI/Input/Input";

interface FormProps {
  cls: string;
}

const Form: React.FC<FormProps> = ({ cls }) => {
  const [groupTitle, setGroupTitle] = React.useState<string>("");

  const dispatch = useDispatch();

  const toggleVisibleModal = (): void => {
    dispatch(setToggleVisibleModal());
  };

  const addNewGroup = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (groupTitle.trim().length > 0) {
      const newGroup = {
        id: new Date().getTime(),
        title: groupTitle,
        todoItem: [],
      };
      setGroupTitle("");
      dispatch(addGroup(newGroup));
    }
  };

  return (
    <form className={styles[cls]} onSubmit={(e) => addNewGroup(e)}>
      <div onClick={() => toggleVisibleModal()} className={styles.modalClose}>
        &times;
      </div>
      <Input
        placeholder="Заполните поле !!!"
        value={groupTitle}
        onChange={(e) => setGroupTitle(e.target.value)}
      />
      <Button className="modalWinBtn">добавить</Button>
    </form>
  );
};

export default Form;
