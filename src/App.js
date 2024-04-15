import { useState } from "react";
import "./App.css";
import CopyIcon from "./components/Copy";
import InputArea from "./components/InputArea";

const templateCode = "await test.step('', async ()=>{\n<LINE>\n})";

function App() {
  const [output, setOutput] = useState("");
  const onChangeHandler = (data) => {
    // console.log(data);
    changeOutput(data);
  };

  const changeOutput = (data) => {
    if (data) {
      let dataArr = data.split("\n");
      let finalData = "";
      console.log(dataArr);
      dataArr.forEach((line) => {
        finalData += "\n" + templateCode.replace("<LINE>", line) + "\n";
      });
      console.log(finalData);
      setOutput(finalData);
    } else {
      setOutput("");
    }

    // setOutput(data);
  };

  const onClickHandler = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <div className="App">
      <InputArea
        placeholder={"Type the content.."}
        isDisabled={false}
        onChangeHandler={onChangeHandler}
      />
      <InputArea value={output} placeholder={"Output"} isDisabled={true} />
      {/* <Task /> */}
      <CopyIcon onClickHandler={onClickHandler} />
    </div>
  );
}

export default App;
