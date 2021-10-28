import styled from "styled-components";
export const Container = styled.div`
	display: flex;
	flex-flow: column wrap;
	max-width: 1000px;
	margin: auto;
	padding: 3rem;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	gap: 1rem;
	
	@media (min-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
	}
`;

export const Column = styled.div`
	display: flex;
	flex-flow: column wrap;
`;

export const Link = styled.a`
  font-size: 13px;
	color: #646467;
  text-decoration: none;
`;

export const Title = styled.h2`
	font-size: 1rem;
	color: #757575;
	margin-bottom: 2rem;
`;

export const Text = styled.p`
  font-size: 1rem;
  color: #757575;
  margin-bottom: 2rem;
`;

export const Break = styled.div`
	flex-basis: 100%;
	height: 0;
`;
