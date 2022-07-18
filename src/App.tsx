import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atom";
import Board from "./Components/Board";

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  min-height: 200px;
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  /** onDragEnd args 설명
   * @destination : 어디로 가는지
   * @source : 어디서 왔는지
   * 위 두가지를 바탕으로 function 실행시마다 source데이터는 삭제하고 destination 데이터를 추가해 새로운 데이터를 만든다.
   */
  const onDragEnd = (info: DropResult) => {
    const { draggableId, destination, source } = info;
    if (!destination) return;
    // 같은 Board에서 움직였을 때
    if (source.droppableId === destination.droppableId) {
      setToDos((allBoards) => {
        // 변화가 일어난 board의 값만 새로운 배열로 복사한다.
        // 기존의 값을 그냥 return하게 되는 경우엔 변동이 없음으로 인지함으로 새로운 배열 생성
        const boardCopy = [...allBoards[source.droppableId]];
        // source.index값으로 선택한 Object를 지정함.
        const taskObj = boardCopy[source.index];
        // 1) source.index에 해당하는 값을 지움
        boardCopy.splice(source.index, 1);
        // 2) destination.index에 해당하는 위치에 지정된 taskObj를 넣음
        boardCopy.splice(destination.index, 0, taskObj);
        return {
          ...allBoards,
          [source.droppableId]: boardCopy,
        };
      });
    }
    // 다른 board로 넘길 때
    if (source.droppableId !== destination.droppableId) {
      setToDos((allBoards) => {
        const sourceBoard = [...allBoards[source.droppableId]];
        const destinationBoard = [...allBoards[destination.droppableId]];
        const taskObj = sourceBoard[source.index];
        // 1) source.index에 해당하는 값을 지움
        sourceBoard.splice(source.index, 1);
        // 2) destination.index에 해당하는 위치에 draggableId를 넣음
        destinationBoard.splice(destination.index, 0, taskObj);
        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard,
        };
      });
    }
  };
  return (
    // onDragEnd : 드래그를 마치면 발생하는 event
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardName) => (
            <Board
              boardName={boardName}
              key={boardName}
              toDos={toDos[boardName]}
            />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
