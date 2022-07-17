import { atom } from "recoil";

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    "To Do": ["a", "e", "f"],
    Doing: ["b", "c"],
    Done: ["d"],
    "Do Later": ["x", "z"],
  },
});
