import styled from "styled-components";

export const Container = styled.section`
	
	max-width: 1000px;
	margin: auto;
	@media (min-width: 1000px) {
    padding: 3rem;
	}
`;

export const Item = styled.div`
  color: whitesmoke;
	margin-bottom: 10px;
	width: 100%;
	&:first-of-type {
		margin-top: 3em;
	}
`;

export const Frame = styled.div`
	margin-bottom: 40px;
`;

export const Inner = styled.div`

`;

export const Title = styled.h1`
	color: whitesmoke;
  text-align: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
	align-items: center;
	background-color: #303030;
	cursor: pointer;
	margin: 0 0 0.1rem 0;
	padding: 1rem 2rem;
	@media (min-width: 1000px) {
		font-size: 1.5rem;
	}
`;

export const Body = styled.div`
	background-color: #303030;
  color: whitesmoke;
  margin: 0 0 0.5rem 0;
  padding: 2rem;
	max-height: ${({ maxHeight }) => maxHeight};
	transition: max-height 0.25s cubic-bezier(0.5,0,0.1,0.1);
  @media (min-width: 1000px) {
    font-size: 1.5rem;
  }
`;
