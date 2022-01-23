import React from "react";
import "./Logo.sass";

const Logo = ({ fontColor, width }) => {
	if (fontColor === undefined) {
		fontColor = "#fff";
	}

	return (
		<div
			style={{
				//Center the logo
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: { width },
			}}
		>
			{/* <svg
				id="logo-5"
				width={width ? width : "10rem"}
				height="auto"
				viewBox="0 0 132 40"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M23.23 11.39H25.23V25.31H31.23V27.31H23.23V11.39ZM37.46 11.39C38.6467 11.39 39.8067 11.7419 40.7934 12.4012C41.7801 13.0605 42.5492 13.9975 43.0033 15.0939C43.4574 16.1903 43.5762 17.3967 43.3447 18.5605C43.1132 19.7244 42.5418 20.7935 41.7026 21.6326C40.8635 22.4718 39.7944 23.0432 38.6305 23.2747C37.4667 23.5062 36.2603 23.3874 35.1639 22.9333C34.0675 22.4791 33.1305 21.7101 32.4712 20.7234C31.8119 19.7367 31.46 18.5767 31.46 17.39C31.46 16.6021 31.6152 15.8218 31.9167 15.0939C32.2182 14.3659 32.6602 13.7045 33.2174 13.1474C33.7745 12.5902 34.4359 12.1482 35.1639 11.8467C35.8918 11.5452 36.6721 11.39 37.46 11.39V11.39ZM37.46 21.39C38.2511 21.39 39.0245 21.1554 39.6823 20.7159C40.3401 20.2763 40.8528 19.6516 41.1555 18.9207C41.4583 18.1898 41.5375 17.3856 41.3831 16.6096C41.2288 15.8337 40.8478 15.121 40.2884 14.5616C39.729 14.0022 39.0163 13.6212 38.2404 13.4669C37.4644 13.3125 36.6602 13.3917 35.9293 13.6945C35.1984 13.9972 34.5736 14.5099 34.1341 15.1677C33.6946 15.8255 33.46 16.5989 33.46 17.39C33.4653 18.4474 33.889 19.4597 34.6386 20.2055C35.3882 20.9513 36.4026 21.37 37.46 21.37V21.39ZM33.46 25.33H41.46V27.33H33.46V25.33ZM59.06 27.33H57.06V25.9C55.7702 26.8028 54.2344 27.288 52.66 27.29C51.3175 27.299 49.9943 26.97 48.8124 26.3333C47.6304 25.6965 46.6277 24.7726 45.8967 23.6466C45.1656 22.5206 44.7296 21.2287 44.629 19.8899C44.5283 18.5512 44.7662 17.2086 45.3207 15.986C45.8752 14.7633 46.7285 13.6998 47.8019 12.8936C48.8754 12.0873 50.1345 11.5641 51.4632 11.3723C52.792 11.1804 54.1477 11.3261 55.4053 11.7958C56.663 12.2655 57.7823 13.0441 58.66 14.06L57.19 15.37C56.5224 14.6236 55.6787 14.0562 54.7356 13.7195C53.7926 13.3827 52.7803 13.2873 51.791 13.442C50.8016 13.5967 49.8668 13.9966 49.0715 14.6051C48.2763 15.2137 47.646 16.0115 47.2382 16.9261C46.8303 17.8406 46.6578 18.8426 46.7364 19.8409C46.815 20.8392 47.1421 21.8019 47.6881 22.6413C48.2341 23.4807 48.9814 24.1702 49.8621 24.6468C50.7427 25.1234 51.7287 25.372 52.73 25.37C53.561 25.3717 54.3826 25.1939 55.1386 24.8487C55.8945 24.5035 56.567 23.9991 57.11 23.37H51.71V21.37H59.08L59.06 27.33ZM66.42 11.43C67.6067 11.43 68.7667 11.7819 69.7534 12.4412C70.7401 13.1005 71.5092 14.0375 71.9633 15.1339C72.4174 16.2303 72.5362 17.4367 72.3047 18.6005C72.0732 19.7644 71.5018 20.8335 70.6626 21.6726C69.8235 22.5118 68.7544 23.0832 67.5905 23.3147C66.4267 23.5462 65.2203 23.4274 64.1239 22.9733C63.0275 22.5191 62.0905 21.7501 61.4312 20.7634C60.7719 19.7767 60.42 18.6167 60.42 17.43C60.4147 16.637 60.5667 15.8509 60.8671 15.117C61.1675 14.3831 61.6104 13.716 62.1702 13.1544C62.73 12.5927 63.3956 12.1476 64.1285 11.8447C64.8614 11.5419 65.647 11.3873 66.44 11.39L66.42 11.43ZM66.42 21.43C67.2111 21.43 67.9845 21.1954 68.6423 20.7559C69.3001 20.3163 69.8128 19.6916 70.1155 18.9607C70.4183 18.2298 70.4975 17.4256 70.3431 16.6496C70.1888 15.8737 69.8078 15.161 69.2484 14.6016C68.689 14.0422 67.9763 13.6612 67.2004 13.5069C66.4244 13.3525 65.6202 13.4317 64.8893 13.7345C64.1584 14.0372 63.5336 14.5499 63.0941 15.2077C62.6546 15.8655 62.42 16.6389 62.42 17.43C62.4358 18.4839 62.8669 19.489 63.6197 20.2268C64.3724 20.9645 65.386 21.3754 66.44 21.37L66.42 21.43ZM62.42 25.37H70.42V27.37H62.42V25.37ZM74.55 11.39H76.55V27.29H74.55V11.39ZM79.32 11.39H81.32C81.423 11.3791 81.5269 11.3791 81.63 11.39C82.4676 11.2991 83.315 11.3857 84.1169 11.644C84.9188 11.9024 85.6574 12.3267 86.2844 12.8894C86.9115 13.4521 87.413 14.1406 87.7563 14.91C88.0997 15.6794 88.2771 16.5125 88.2771 17.355C88.2771 18.1975 88.0997 19.0306 87.7563 19.8C87.413 20.5694 86.9115 21.2579 86.2844 21.8206C85.6574 22.3833 84.9188 22.8076 84.1169 23.066C83.315 23.3243 82.4676 23.4109 81.63 23.32H81.32V27.32H79.32V11.39ZM81.32 13.39V21.3H81.63C82.1949 21.3752 82.7693 21.3289 83.3149 21.164C83.8604 20.9992 84.3644 20.7197 84.7931 20.3443C85.2219 19.9689 85.5654 19.5062 85.8008 18.9872C86.0362 18.4682 86.158 17.9049 86.158 17.335C86.158 16.7651 86.0362 16.2018 85.8008 15.6828C85.5654 15.1638 85.2219 14.7011 84.7931 14.3257C84.3644 13.9502 83.8604 13.6708 83.3149 13.5059C82.7693 13.3411 82.1949 13.2948 81.63 13.37C81.5211 13.3813 81.4137 13.4048 81.31 13.44L81.32 13.39ZM95.73 12.54L94.25 13.71C93.9947 13.4432 93.6685 13.2548 93.3098 13.167C92.9511 13.0792 92.5748 13.0956 92.2251 13.2143C91.8753 13.3329 91.5668 13.5489 91.3356 13.8369C91.1044 14.1249 90.9602 14.4729 90.92 14.84V15C90.92 15.88 91.53 16.47 92.72 16.55C97.3 16.83 99.4 18.98 99.4 21.82V22C99.2817 23.124 98.8431 24.1904 98.1363 25.0724C97.4295 25.9544 96.4842 26.6147 95.413 26.975C94.3417 27.3352 93.1895 27.3802 92.0934 27.1045C90.9973 26.8289 90.0034 26.2442 89.23 25.42L90.76 24.24C91.1161 24.6217 91.551 24.9213 92.0345 25.1182C92.518 25.315 93.0385 25.4044 93.56 25.38C94.5232 25.4308 95.4687 25.1075 96.1991 24.4776C96.9296 23.8478 97.3885 22.9601 97.48 22V21.86C97.48 19.19 94.86 18.7 92.59 18.48C90.49 18.28 88.98 16.97 88.98 15.08V15C89.054 14.016 89.5031 13.098 90.2344 12.4356C90.9657 11.7731 91.9235 11.4167 92.91 11.44C93.4328 11.4246 93.9529 11.5189 94.437 11.717C94.921 11.9151 95.3581 12.2125 95.72 12.59L95.73 12.54ZM107.23 25.26C109.72 25.26 111.69 22.57 111.69 19.26V11.26H113.69V19.26C113.69 23.66 110.81 27.21 107.27 27.21C103.73 27.21 100.85 23.66 100.85 19.26V11.26H102.85V19.26C102.77 22.62 104.74 25.31 107.22 25.31L107.23 25.26ZM129.04 27.26H127.04V17.36L122.43 23.36L117.82 17.36V27.29H115.82V11.39L122.42 20.08L129.02 11.39L129.04 27.26Z"
					className="ccustom"
					fill={fontColor}
				></path>
				<path
					d="M13.63 9C13.63 7.55722 13.0569 6.17353 12.0367 5.15334C11.0165 4.13314 9.63278 3.56 8.19 3.56C6.74722 3.56 5.36354 4.13314 4.34334 5.15334C3.32314 6.17353 2.75 7.55722 2.75 9V25.45L7.23 28.66V36.48H9.15V28.66L13.63 25.45V9ZM11.71 18.2L9.15 20.76V18.36L11.71 15.8V18.2ZM4.71 15.8L7.27 18.36V20.76L4.71 18.2V15.8ZM11.71 13.08L8.19 16.6L4.67 13V10.6L8.19 14.12L11.71 10.6V13.08ZM8.19 5.48C8.96415 5.48342 9.71583 5.74053 10.3299 6.21193C10.944 6.68333 11.3866 7.34303 11.59 8.09L8.19 11.48L4.79 8.09C4.98594 7.3356 5.42537 6.66695 6.04013 6.18781C6.65489 5.70866 7.41059 5.44579 8.19 5.43999V5.48ZM4.67 24.48V20.88L7.23 23.44V26.3L4.67 24.48ZM9.15 26.31V23.44L11.71 20.88V24.47L9.15 26.31Z"
					className="ccustom"
					fill={fontColor}
				></path>
			</svg> */}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1191 394.37"
				width={width ? width : "10rem"}
			>
				<g id="Ebene_1" data-name="Ebene 1">
					<path
						className="cls-2"
						d="M557.82,480.54c-48.69,11.56-71.59,54.44-77,65.7-4,8.35-5.9,15.19-9.63,28.88-1.82,6.68-17.36,66.25-1.13,132,2.46,10,5.47,19.33,13.59,23.79,11.06,6.06,23.23-1.54,41.35-7.37,17.71-5.69,14.86-1.25,77-7.36,37.1-3.65,55.86-5.59,66.27-11.33,29.09-16,40-44.94,41.91-50.4,9.24-25.93,8-58.57-7.93-82.13-12.92-19.17-26.55-19-45.31-47.57C646,508,648.87,505.3,641.07,497,620.34,474.8,581.82,474.84,557.82,480.54Z"
						transform="translate(-358 -389)"
					/>
					<path
						className="cls-3"
						d="M538.56,470.91s-57.2,7.93-64.57,37.38c0,0-22.65,19.26-22.65,99.68a812,812,0,0,1-12.46,87.79s-9.06,28.89,36.25,44.18c0,0,103.07-4,148.38-21.52,0,0,68-4,88.36-73.63,0,0,19.82-69.67-27.75-109.88,0,0-30-41.34-62.87-51.54C621.25,483.37,582.74,469.78,538.56,470.91Z"
						transform="translate(-358 -389)"
					/>
					<path
						className="cls-3"
						d="M695.26,546.26s24-12.48,44.36,16.4a33.71,33.71,0,0,1,21,11.9,55.23,55.23,0,0,1-6.23,3.4c-3.11,1.43-24.83,11.48-38.39,1.18a23.53,23.53,0,0,1-7.49-10.25"
						transform="translate(-358 -389)"
					/>
					<path
						className="cls-3"
						d="M646.25,496.68s11.81-16.71-15.94-55.79c0,0-25.49,27.19-9.06,42.48"
						transform="translate(-358 -389)"
					/>
					<path
						className="cls-3"
						d="M656.48,505s14.8-17.61,38.78-8.27c0,0,26.62,14.55,34.92,8.27a91.26,91.26,0,0,0-19.39,24.58s-6.17,12.74-30.86,0"
						transform="translate(-358 -389)"
					/>
					<path
						className="cls-3"
						d="M599.53,477.39s-32.65-7-27.56-25.74c0,0,14.56-25.22,13.51-29,0,0,20.77,4.21,30.25,27.38,0,0,.32,5.9.09,18.79"
						transform="translate(-358 -389)"
					/>
				</g>
				<g id="Ebene_2" data-name="Ebene 2">
					<text
						className="cls-4"
						transform="translate(403 300)"
						style={{
							fill: fontColor,
						}}
					>
						Saiso
					</text>
				</g>
			</svg>
		</div>
	);
};

export default Logo;
