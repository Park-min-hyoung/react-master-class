import { useState } from "react";
import Circle from "./Circle";

function App() {
  const [value, setValue] = useState(0);
  // Error 발생
  // setValue("haha");
  setValue(1);
  return (
    <div>
      <Circle borderColor="yellow" bgColor="teal" />
      <Circle text="IM here" bgColor="tomato" />
    </div>
  );
}

export default App;
