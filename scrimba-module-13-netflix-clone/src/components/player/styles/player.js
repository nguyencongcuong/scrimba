import styled from 'styled-components';

export const Container = styled.div``;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  margin: 0 20px;
`;

export const Inner = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: auto;

  video {
    height: 100%;
    width: 100%;
  }
`;

export const Close = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 25px;
  height: 2px;
  opacity: 1;
  background-color: transparent;
  border: 0;
  cursor: pointer;

  &::before,
  &::after {
    position: absolute;
    top: 10px;
	  right: 10px;
    content: ' ';
    height: 5px;
    width: 25px;
    background-color: #f6f1f1;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

export const Button = styled.button`

`;
