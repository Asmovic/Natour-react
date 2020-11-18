/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html {
    box-sizing: border-box;
    font-size: 62.5%; // 1rem = 10px, 10px/16px = 62.5%

	@media only screen and (max-width: 800px) {
		padding: 0px;
		font-size: 50%;
	}

	@media only screen and (max-width: 500px) {
		font-size: 37.5%;
	}
}
	body {
		font-family: Roboto;
		padding: 0;
		background-color: #F1F3F6;
			
		display: grid;
		grid-template-rows: repeat(4, min-content);

	}

	a {
		text-decoration: none;
		color: black;
	}

	* {
		box-sizing: border-box;
	}
`;
