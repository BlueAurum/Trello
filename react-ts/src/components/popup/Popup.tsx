import React from "react";
import Button from "../UI/Button/Button";
import styles from "./popup.module.scss";
import { useDispatch } from "react-redux";
import { deleteGroup } from "../../store/groupStore/groupStore";
import Input from "../UI/Input/Input";
import { groupEditTitle } from "../../store/groupStore/groupStore";

interface PopupProps {
  id: number;
}

const Popup: React.FC<PopupProps> = ({ id }) => {
  const [isEdit, setIsEdit] = React.useState<boolean>(false);
  const [newTitle, setNewTitle] = React.useState<string>("");

  const dispatch = useDispatch();

  const deleteG = (): void => {
    dispatch(deleteGroup(id));
  };

  const addEditingBlock = (): void => {
    setIsEdit((prev) => !prev);
  };

  const editingTitle = (): void => {
    if (newTitle.trim().length > 0) {
      const editingObj = {
        id,
        title: newTitle,
      };
      dispatch(groupEditTitle(editingObj));
      setNewTitle("");
    }
  };

  return (
    <div className={styles.popup}>
      {isEdit && (
        <div className={styles.popupEditBlock}>
          <Input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <Button onClick={() => editingTitle()} className="btn editBtn">
            edit
          </Button>
        </div>
      )}
      <Button onClick={() => addEditingBlock()} className="btn editBtn">
        Edit Title
      </Button>
      <Button onClick={() => deleteG()} className="btn deleteBtn">
        &times;
      </Button>
    </div>
  );
};

export default Popup;
