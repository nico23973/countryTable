import Image from "next/image";
import { useEffect } from "react";

export default function Th(props) {
	function toggleUiIsShown(state) {
		let old = props.uiIsShown;
		old[props.name] = state;
		props.setUiIsShown({ ...old });
	}

	return (
		<th
			onMouseEnter={() => {
				toggleUiIsShown(true);
			}}
			onMouseLeave={() => {
				toggleUiIsShown(false);
			}}
			style={{ width: 36 }}
		>
			<div style={{ position: "relative" }}>
				{props.uiIsShown[props.name] ? (
					<div>
						<div style={{ position: "absolute", bottom: 4, left: "16px" }}>
							<Image
								src="/../public/arrUp.svg"
								alt="Sort up"
								height="6"
								width="12"
							/>
						</div>
						<div style={{ position: "absolute", top: 4, left: "16px" }}>
							<Image
								src="/../public/arrDown.svg"
								alt="Sort down"
								height="6"
								width="12"
							/>
						</div>
					</div>
				) : null}
				{props.name}
				<div
					style={{
						paddingLeft: "6",
						position: "absolute",
						right: "16px",
						bottom: "0",
					}}
				>
					{props.uiIsShown[props.name] ? (
						<Image
							height="12"
							width="12"
							src="/../public/cross.svg"
							alt="Delete Column"
							onClick={() => {
								console.log("click");
							}}
						/>
					) : null}
				</div>
			</div>
		</th>
	);
}
