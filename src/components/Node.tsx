import React from "react";
import SvgLine from "./SvgLine";
import NodeButton from "./NodeButton";
import { keyToArrayOfKeys } from "./utils/utils";

interface Props {
  globalConfig: Record<string, object>;
  setGlobalConfig: (e: string) => void;
  parentLabel: string;
}

export const Node: React.FC<Props> = ({ globalConfig, setGlobalConfig, parentLabel }) => {
  const [localConfig, setLocalConfig] = React.useState<Record<string, object>>({});

  React.useEffect(() => {
    let config = globalConfig;
    for (let value of keyToArrayOfKeys(parentLabel)) {
      // @ts-ignore
      config = config[value];
    }
    if (Object.keys(config).length !== 0) {
      setLocalConfig(config);
    }
  }, [globalConfig, parentLabel]);

  if (Object.keys(localConfig).length === 0) return null;

  return (
    <div
      style={{ margin: "30px 0", borderLeft: Object.keys(localConfig).length > 1 ? "1px solid black" : "" }}
    >
      {Object.keys(localConfig).map((value) => (
        <div className="flex">
          <div className="node__container">
            <SvgLine withArrow />
            <NodeButton label={value} onClick={() => setGlobalConfig(value)} />
            {Object.keys(localConfig[value]).length > 0 && <SvgLine />}
          </div>
          <Node globalConfig={globalConfig} setGlobalConfig={setGlobalConfig} parentLabel={value} />
        </div>
      ))}
    </div>
  );
};

export default Node;
