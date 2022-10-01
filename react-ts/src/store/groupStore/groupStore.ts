import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type TodoItems = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

interface State {
  id: number;
  title: string;
  todoItem?: TodoItems[];
}

const initialState: State[] = [
  {
    id: new Date().getTime(),
    title: "Hello world",
    todoItem: [
      {
        id: new Date().getTime(),
        title: "World of Tank",
        description:
          "Я сделал некоторые стили для кнопки пользовательского интерфейса материала, и теперь я хочу переместить style={{backgroundColor}}часть в верхнюю часть функции, прямо перед возвратом.",
        completed: false,
      },
    ],
  },
];

export const groupStore = createSlice({
  name: "groupStore",
  initialState: initialState,
  reducers: {
    addGroup(state, action: PayloadAction<State>) {
      state.push(action.payload);
    },
    deleteGroup(state, action: PayloadAction<number>) {
      return state.filter((item) => item.id !== action.payload);
    },
    groupEditTitle(
      state,
      action: PayloadAction<{ id: number; title: string }>
    ) {
      const indexEleme = state.findIndex(
        (item) => item.id === action.payload.id
      );
      state[indexEleme].title = action.payload.title;
    },
    addGroupItem(
      state,
      action: PayloadAction<{ newTodo: TodoItems; id: number }>
    ) {
      const indexEleme = state.findIndex(
        (item) => item.id === action.payload.id
      );
      state[indexEleme].todoItem?.push(action.payload.newTodo);
    },
    deleteTodoItem(
      state,
      action: PayloadAction<{ groupId: number; todoId: number }>
    ) {
      const groupIdx = state.findIndex(
        (group) => Number(group.id) === Number(action.payload.groupId)
      );

      state[groupIdx].todoItem = state[groupIdx].todoItem?.filter(
        (todo) => Number(todo.id) !== Number(action.payload.todoId)
      );
    },
    completedTodoItem(state, action: PayloadAction<number>) {
      console.log(action.payload);
    },
  },
});

export const {
  addGroup,
  deleteGroup,
  groupEditTitle,
  addGroupItem,
  completedTodoItem,
  deleteTodoItem,
} = groupStore.actions;
export default groupStore.reducer;
