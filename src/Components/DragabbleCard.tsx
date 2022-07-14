import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 5px;
  padding: 10px 10px;
  margin-bottom: 5px;
  background-color: ${(props) => props.theme.cardColor};
`;

interface DraggableCardProps {
  toDo: string;
  index: number;
}

function DraggableCard({ toDo, index }: DraggableCardProps) {
  console.log(toDo, "렌더링 됨");
  return (
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
  );
}

export default React.memo(DraggableCard);
