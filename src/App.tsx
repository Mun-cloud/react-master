import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(146, 9, 173), rgb(211, 109, 174));
`;
const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  display: grid;
  background-color: white;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 28px;
  position: absolute;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  top: 100px;
`;

const box = {
  entry: (isBack: boolean) => ({
    x: isBack ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: (isBack: boolean) => ({
    x: isBack ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.3,
    },
  }),
};

function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 1 : --prev));
  };
  const nextPlease = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 10 : ++prev));
  };
  return (
    <Wrapper>
      <button onClick={prevPlease}>prev</button>
      <AnimatePresence custom={back}>
        <Box
          custom={back}
          variants={box}
          initial="entry"
          animate="center"
          exit="exit"
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={nextPlease}>next</button>
    </Wrapper>
  );
}
export default App;
