import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	html, body {
		font-family: "Helvetica", Helvetia, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		background-color: black;
		box-sizing: border-box;
		color: #333333;
		font-size: 16px;
		line-height: 1.8;
		margin: 0;
	}
	img {
		width: 100%;
		max-width: 100%;
	}
`;
