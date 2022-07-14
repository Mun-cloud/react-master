import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atom";

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
  min-height: 200px;
`;

const Board = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
`;

const Card = styled.div`
  border-radius: 5px;
  padding: 10px 10px;
  margin-bottom: 5px;
  background-color: ${(props) => props.theme.cardColor};
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  /** onDragEnd args 설명
   * @destination : 어디로 가는지
   * @source : 어디서 왔는지
   * 위 두가지를 바탕으로 function 실행시마다 source데이터는 삭제하고 destination 데이터를 추가해 새로운 데이터를 만든다.
   */
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    // 드래그만 하고 제자리에 다시 두는 경우
    if (!destination) return;

    setToDos((oldToDos) => {
      // 기존의 값을 그냥 return하게 되는 경우엔 변동이 없음으로 인지함으로 새로운 배열 생성
      const toDosCopy = [...oldToDos];
      // 1) source.index에 해당하는 값을 지움
      toDosCopy.splice(source.index, 1);
      // 2) destination.index에 해당하는 위치에 draggableId를 넣음
      toDosCopy.splice(destination?.index, 0, draggableId);
      return toDosCopy;
    });
  };
  return (
    // onDragEnd : 드래그를 마치면 발생하는 event
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {/* 아이디값(droppableId) 필요 */}
          <Droppable droppableId="one">
            {/* 함수를 내용으로 사용해야 함 */}
            {(magic) => (
              <Board ref={magic.innerRef} {...magic.droppableProps}>
                {/* 아이디값(draggableId), index(sorting을 위해) 필요 */}
                {toDos.map((toDo, index) => (
                  // Draggable의 키와 Id값은 같아야 함
                  <Draggable key={toDo} draggableId={toDo} index={index}>
                    {/* 함수를 내용으로 새용해야 함 */}
                    {(magic) => (
                      <Card
                        ref={magic.innerRef}
                        {...magic.dragHandleProps}
                        {...magic.draggableProps}
                      >
                        {toDo}
                      </Card>
                    )}
                  </Draggable>
                ))}
                {magic.placeholder}
              </Board>
            )}
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
