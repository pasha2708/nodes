import React from "react";

const SvgLine: React.FC<{ withArrow?: boolean }> = ({ withArrow }) => {
	return (
		<div style={{ width: "50px" }}>
			<svg height="100%" width="100%" viewBox="0 0 50 100">
				<line x1="0" y1="50" x2="50" y2="50" stroke="black" />
				{withArrow && (
					<>
						<line x1="38" y1="45" x2="50" y2="50" stroke="black" />
						<line x1="38" y1="55" x2="50" y2="50" stroke="black" />
					</>
				)}
			</svg>
		</div>
	);
};

export default SvgLine;
