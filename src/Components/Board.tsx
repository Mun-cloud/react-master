import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DragabbleCard from "./DragabbleCard";

const Wrapper = styled.div`
  width: 300px;
  padding: 20px 10px;
  padding-top: 10px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
  min-height: 300px;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

interface IboardProps {
  toDos: string[];
  boardId: string;
}

function Board({ toDos, boardId }: IboardProps) {
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      {/* 아이디값(droppableId) 필요 */}
      <Droppable droppableId={boardId}>
        {/* 함수를 내용으로 사용해야 함 */}
        {(magic) => (
          <div ref={magic.innerRef} {...magic.droppableProps}>
            {/* 아이디값(draggableId), index(sorting을 위해) 필요 */}
            {toDos.map((toDo, index) => (
              <DragabbleCard key={toDo} toDo={toDo} index={index} />
            ))}
            {magic.placeholder}
          </div>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Board;
