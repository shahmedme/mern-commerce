import React from "react";

export default function Ribon() {
	return (
		<>
			<div className="ribbon">
				<a
					href="https://github.com/shakilahmmeed/mern-commerce"
					target="_blank"
				>
					View on GitHub
				</a>
			</div>
			<style>{`
                .ribbon {
                    background-color: #a00;
                    overflow: hidden;
                    white-space: nowrap;
                    position: absolute;
                    right: -50px;
                    top: 40px;
                    transform: rotate(45deg);
                    box-shadow: 0 0 10px #888;
                  }
                  
                  .ribbon a {
                    border: 1px solid #faa;
                    color: #fff;
                    display: block;
                    margin: 1px 0;
                    padding: 10px 50px;
                    text-align: center;
                    text-decoration: none;
                    text-shadow: 0 0 5px #444;
                  }
            `}</style>
		</>
	);
}
