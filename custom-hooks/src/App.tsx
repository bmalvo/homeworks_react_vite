import { useConsoleLog } from "./hooks/useConsoleLog";
import { useCustomLogger } from "./hooks/useCustomLogger";

export const App = () => {
  useConsoleLog();

  const [ logCount, log ] = useCustomLogger('TEST_APP')


  const logSomething = () => {
    log(Math.round(Math.random() * 100000).toString())
  };

  return <>
    <h1>{logCount}</h1>
    <button onClick={logSomething}>Log something</button>
  </>;
};
