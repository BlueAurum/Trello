import React from "react";
import styles from "./groupItem.module.scss";
import Popup from "../popup/Popup";
import TodoItem from "../todoItem/TodoItem";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import { addGroupItem } from "../../store/groupStore/groupStore";
import { useDispatch } from "react-redux";

type TodoItems = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

interface GroupItemProps {
  id: number;
  title: string;
  todoItem?: TodoItems[];
}

const GroupItem: React.FC<GroupItemProps> = ({ id, title, todoItem }) => {
  const dispatch = useDispatch();
  const [popupToggleVisible, setPopupToggleVisible] =
    React.useState<boolean>(false);
  const [visibleTodoForm, setVisibleTodoForm] = React.useState<boolean>(false);

  const [todoTitle, setTodoTitle] = React.useState<string>("");
  const [todoDescription, setTodoDescription] = React.useState<string>("");

  const toggleVisiblePopup = (): void => {
    setPopupToggleVisible((prev) => !prev);
  };

  const toggleVisibleTodoForm = (): void => {
    setVisibleTodoForm((prev) => !prev);
  };

  const addTodoItem = (): void => {
    if (todoTitle.trim().length > 0 && todoDescription.trim().length > 0) {
      const newTodo = {
        id: new Date().getTime(),
        title: todoTitle,
        description: todoDescription,
        completed: false,
      };
      dispatch(addGroupItem({ newTodo, id }));
      setTodoTitle("");
      setTodoDescription("");
    }
  };

  return (
    <div className={styles.groupItem}>
      {popupToggleVisible && <Popup id={id} />}
      <div className={styles.cardHeader}>
        <h1 className={styles.cardTitle}>{title}</h1>
        <div onClick={() => toggleVisiblePopup()} className={styles.cardBurger}>
          &#8801;
        </div>
      </div>
      <Button
        className="btn addTodoItemBtn"
        onClick={() => toggleVisibleTodoForm()}
      >
        &#9998;
      </Button>
      {visibleTodoForm && (
        <div className={styles.addTodoItem}>
          <div className={styles.worningText}>Заполните все поля обязательно !!!</div>
          <Input
            type="text"
            onChange={(e) => setTodoTitle(e.target.value)}
            value={todoTitle}
            placeholder="введите заголовок"
          />
          <Input
            type="text"
            onChange={(e) => setTodoDescription(e.target.value)}
            value={todoDescription}
            placeholder="введите описание"
          />
          <Button onClick={() => addTodoItem()} className="btn addTodoBtn">
            добавить задачу
          </Button>
        </div>
      )}
      {todoItem &&
        todoItem.map((todoItem) => (
          <TodoItem key={todoItem.id} groupId={id} {...todoItem} />
        ))}
    </div>
  );
};

export default GroupItem;
