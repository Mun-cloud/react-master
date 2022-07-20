import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { scale: 1.1, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
};

function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route>
          <Wrapper>
            <BiggerBox ref={biggerBoxRef}>
              <Box
                drag
                dragSnapToOrigin
                dragElastic={1}
                dragConstraints={biggerBoxRef}
                variants={boxVariants}
                whileHover="hover"
                whileDrag={{ backgroundColor: "rgb(46, 204, 113)" }}
                whileTap="click"
              ></Box>
            </BiggerBox>
          </Wrapper>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
