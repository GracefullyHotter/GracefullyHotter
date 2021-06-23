import React from "react"

import ReactTooltip from "react-tooltip"

export default function SHUToolTip() {
	return (
		<span data-tip data-for="SHUTip" className="is-small">
			<span className="icon  is-right">
				<i className="fas fa-info-circle" />
			</span>

			<ReactTooltip id="SHUTip" place="right" effect="solid">
				Scoville Heat Units (SHU) is a measure of the "hotness" of a chili
				pepper. <br />
				0 - 15,000 = Mild <br />
				15,000 - 350,000 = Medium <br />
				350,000 - 855,000 = Hot <br />
				855,000+ = Super Hot
			</ReactTooltip>
		</span>
	)
}
