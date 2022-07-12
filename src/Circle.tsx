import styled from "styled-components";

// props를 style-component로 보내기위해 만든 것
interface ContainerProps {
  bgColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

interface CircleProps {
  bgColor: string;
}

function Circle({ bgColor }: CircleProps) {
  // props을 style-component로 보내는 것
  return <Container bgColor={bgColor}></Container>;
}

export default Circle;
