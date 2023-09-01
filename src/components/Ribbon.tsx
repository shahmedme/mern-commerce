import React from "react";
import ribbonStyle from "./ribbon.module.css"

export default function Ribbon() {
	return (
		<>
			<div className={ribbonStyle.ribbon}>
				<a
					href="https://github.com/shakilahmmeed/mern-commerce"
					target="_blank"
				>
					View on GitHub
				</a>
			</div>
		</>
	);
}
