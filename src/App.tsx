import { FC, useState } from "react";
import Node from "./components/Node";
import SvgLine from "./components/SvgLine";
import NodeButton from "./components/NodeButton";
import { addNodeElem } from "./components/utils/utils";
import "./index.css";

export const App: FC = () => {
  const [globalConfig, setGlobalConfig] = useState({ "0": {} });

  const handleSetGlobalConfig = (value: number) => {
    setGlobalConfig({ "0": { ...globalConfig[0], [`0-${value}`]: {} } });
  };

  const handleSetConfig = (value: string) => {
    setGlobalConfig({ ...addNodeElem(globalConfig, value) });
  };

  return (
    <div className="container">
      <NodeButton label={"0"} onClick={() => handleSetGlobalConfig(Object.keys(globalConfig["0"]).length)} />
      {Object.keys(globalConfig["0"]).length > 0 && <SvgLine />}
      <Node globalConfig={globalConfig} setGlobalConfig={handleSetConfig} parentLabel={"0"} />
    </div>
  );
};
