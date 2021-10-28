import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-items: center;
	text-align: center;
	color: white;
	max-width: 700px;
	margin: 0 auto;
	padding: 2rem;
`;

export const Title = styled.h2`
	font-size: 4rem;
	line-height: 1.2;
	margin: 0;
	@media (max-width: 1000px) {
		font-size: 3rem;
	}
`;

export const SubTitle = styled.h3`
	font-size: 1.5rem;
	margin: 0;
	@media (max-width: 1000px) {
		font-size: 1rem;
	}
`;
