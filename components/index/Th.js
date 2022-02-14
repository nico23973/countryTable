import Image from "next/image";

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
						<div
							style={{
								position: "absolute",
								left: "16px",
								bottom: 8,
							}}
						>
							<Image src="/arrUp.svg" alt="Sort up" height="6" width="12" />
						</div>
						<div style={{ position: "absolute", left: "16px", top: 0 }}>
							<Image src="/arrDown.svg" alt="Sort down" height="6" width="12" />
						</div>
					</div>
				) : null}
				{props.name}
				<div
					style={{
						paddingLeft: "6",
						position: "absolute",
						right: "16px",
						bottom: 0,
					}}
				>
					{props.uiIsShown[props.name] ? (
						<Image
							height="12"
							width="12"
							src="/deleteColumn.svg"
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
