import React from "react";
import { useRecoilState } from "recoil";
import { minuteState } from "./atoms";

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    setMinutes(event.currentTarget.value);
  };
  return (
    <div>
      <input value={minutes} type="number" placeholder="Minutes" />
      <input type="number" placeholder="Hours" />
    </div>
  );
}

export default App;
