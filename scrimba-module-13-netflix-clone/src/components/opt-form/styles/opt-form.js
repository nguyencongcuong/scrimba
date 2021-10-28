import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	max-width: 640px;
	margin: 1rem auto;
	@media (max-width: 640px) {
		flex-direction: column;
		align-items: stretch;
	}
`;

export const Input = styled.input`
	flex-basis: 450px;
	flex: auto;
	border: 0;
	padding: 2rem 2rem;
	outline: none;

	&:focus {
		outline: none;
	}
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
	padding: 1rem 2rem;
	background: #e50914;
  border: 0;
	font-size: 26px;
	text-align: center;
	color: white;
	cursor: pointer;
	&:hover {
		background: #f40612;
	}
`;

export const Break = styled.div`
	flex-basis: 100%;
	height: 0;
`;

export const Text = styled.p`
	font-size: 19px;
	color: white;
	text-align: center;
	@media (max-width: 600px) {
		font-size: 16px;
		line-height: 22px;
	}
`;
