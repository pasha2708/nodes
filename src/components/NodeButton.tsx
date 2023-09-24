import { FC, useState } from "react";

interface Props {
  label: string;
  onClick: () => void;
}

const NodeButton: FC<Props> = ({ label, onClick }) => {
  const [buttonVisible, setButtonVisible] = useState(false);
  return (
    <div
      className="button__container"
      onMouseEnter={() => setButtonVisible(true)}
      onMouseLeave={() => setButtonVisible(false)}
    >
      <span className="label">{label}</span>
      {buttonVisible && (
        <button className="button" onClick={onClick}>
          +
        </button>
      )}
    </div>
  );
};

export default NodeButton;
