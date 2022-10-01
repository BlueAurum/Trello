import React from "react";
import Button from "../UI/Button/Button";
import styles from "./todoItem.module.scss";
import { useDispatch } from "react-redux";
import {
  completedTodoItem,
  deleteTodoItem,
} from "../../store/groupStore/groupStore";

interface TodoItemProps {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  groupId: number;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  title,
  description,
  completed,
  groupId,
}) => {
  const dispatch = useDispatch();

  const deleteTodo = (): void => {
    dispatch(deleteTodoItem({ groupId, todoId: id }));
  };

  return (
    <div className={styles.todoItemWrapper}>
      <div className={styles.todoItemHeader}>
        <h1 className={styles.todoItemTitle}>{title}</h1>
        <div className={styles.todoHeaderBtns}>
          <Button className="btn editTodoTitleBtn">&#9998;</Button>
          <Button
            onClick={() => deleteTodo()}
            className="btn deleteTodoItemBtn"
          >
            &times;
          </Button>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default TodoItem;
