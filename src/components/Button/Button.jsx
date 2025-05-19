import styles from "./Button.module.scss";

import { useState } from "react";

export default function Button({
	children,
	onClick,
	src,
	alt,
	bg,
	bgHover,
	bgActive,
	color,
	bora,
	fontSize,
	paddingTopBottom,
	fillContainer,
}) {
	const [isHovered, setIsHovered] = useState(false);
	const [isActive, setIsActive] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};
	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const handleMouseDown = () => {
		setIsActive(true);
	};

	const handleMouseUp = () => {
		setIsActive(false);
	};

	css.setClass(".hovered", {
		background: `var(--${bgHover})`, //if button is hovered change the background
	});

	css.setClass(".active", {
		background: `var(--${bgActive})`, //if button is active change the background
	});

	return (
		<button
			onClick={onClick}
			className={styles.button}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
			style={{
				paddingRight: src && "1.25rem", //if src exist, put paddingRight to 1.25rem
				paddingTop: `${paddingTopBottom}rem`,
				paddingBottom: `${paddingTopBottom}rem`,
				background: `var(--${bg})`,
				borderRadius: `${bora}rem`,
				width: fillContainer && "100%", //if fillContainer exist, put width to 100%
			}}
		>
			{src && (
				<img
					src={src}
					alt={alt}
					className={styles.button__img}
					style={{ fill: `var(--${color})`, height: `${fontSize * 1.25}rem` }}
				/>
			)}
			{children && (
				<p
					className={styles.button__text}
					style={{ fontSize: `${fontSize}rem`, color: `var(--${color})` }}
				>
					{children}
				</p>
			)}
		</button>
	);
}
