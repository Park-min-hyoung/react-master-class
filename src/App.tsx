import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 620px;
  margin-bottom: 20px;
`;

const Box = styled(motion.div)`
  width: 300px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  margin-bottom: 10px;
`;

const Circle = styled(motion.div)`
  background-color: white;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const CircleButton = styled(motion.button)`
  cursor: pointer;
  border: none;
  height: 25px;
  border-radius: 5px;
  transition: all 0.5s ease;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

const boxVariants = {
  hover1: {
    width: "315px",
    height: "215px",
    marginLeft: "-15px",
    marginTop: "-15px",
  },
  hover2: {
    width: "315px",
    height: "215px",
    marginRight: "-15px",
    marginBottom: "-15px",
  },
};

function App() {
  const [circleStatus, setCircleStatus] = useState(false);
  const changeCircleStatus = () => setCircleStatus((prev) => !prev);
  const [id, setId] = useState<null | string>(null);
  return (
    <Wrapper>
      <Flex>
        <Box
          layoutId="1"
          onClick={() => setId("1")}
          variants={boxVariants}
          whileHover="hover1"
        ></Box>
        <Box>{!circleStatus ? <Circle layoutId="circleChange" /> : null}</Box>
        <Box>{!circleStatus ? null : <Circle layoutId="circleChange" />}</Box>
        <Box
          layoutId="2"
          onClick={() => setId("2")}
          variants={boxVariants}
          whileHover="hover2"
        ></Box>
      </Flex>
      <AnimatePresence>
        {id ? (
          <Overlay
            variants={overlay}
            onClick={() => setId(null)}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Box
              layoutId={id}
              style={{
                width: 300,
                height: 200,
                backgroundColor: "rgba(255, 255, 255, 1)",
              }}
            />
          </Overlay>
        ) : null}
      </AnimatePresence>
      {!circleStatus ? (
        <CircleButton onClick={changeCircleStatus}>switch</CircleButton>
      ) : (
        <CircleButton
          style={{ scale: 1.1, color: "orange" }}
          onClick={changeCircleStatus}
        >
          switch
        </CircleButton>
      )}
    </Wrapper>
  );
}

export default App;
