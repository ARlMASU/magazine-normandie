import styles from "./Button.module.scss";

import { useState } from "react";

export default function Button({
	children,
	onClick,
	src,
	alt,
	color,
	bora,
	fontSize,
	paddingTopBottom,
	fillContainer,
	bg,
	bgHover,
	bgActive,
	windowWidth,
}) {
	const [mouseIsDown, setMouseIsDown] = useState(false);
	const [mouseIsHovering, setMouseIsHovering] = useState(false);

	const handleMouseDown = () => {
		setMouseIsDown(true);
	};

	const handleMouseUp = () => {
		setMouseIsDown(false);
	};

	const handleMouseEnter = () => {
		setMouseIsHovering(true);
	};

	const handleMouseLeave = () => {
		setMouseIsHovering(false);
	};

	const handlePaddingRight = () => {
		if (src) {
			if (children) {
				return "1.25rem";
			} else if (windowWidth < 776) {
				return ".5rem";
			}
		} else {
			return "1rem";
		}
	};

	const handlePaddingLeft = () => {
		if (children) {
			return "1rem";
		} else {
			return ".5rem";
		}
	};
	return (
		<button
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={onClick}
			className={styles.button}
			style={{
				paddingRight: handlePaddingRight,
				paddingLeft: handlePaddingLeft,
				paddingTop: `${paddingTopBottom}rem`,
				paddingBottom: `${paddingTopBottom}rem`,
				borderRadius: `${bora}rem`,
				width: fillContainer && "100%", // if fillContainer exist, put width to 100%
				background: mouseIsDown
					? `var(--${bgActive})`
					: mouseIsHovering
					? `var(--${bgHover})`
					: `var(--${bg})`,
				// if mouseIsDown returns true, show bgActive's color,
				// if not, if mouseIsHovering returns true, show bgHover's color,
				// if not, show bg's color
			}}
		>
			{src && (
				<img
					src={src}
					alt={alt}
					className={styles.button__img}
					style={{ height: `${fontSize * 1.125}rem` }}
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
	np;
}
