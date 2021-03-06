import styled from "styled-components";
import {Link as ReachRouterLink} from "react-router-dom";

export const Background = styled.div`
  display: flex;
  flex-flow: column wrap;
  background: url(${({src}) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) center/cover no-repeat;
  border-bottom: 8px solid #222;
  @media (max-width: 1100px) {
    ${({dontShowOnSmallViewPort}) => dontShowOnSmallViewPort && "background: none;"}
  }
`;

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1em 3.5em;
`;

export const Link = styled.p`
  color: #fff;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({active}) => active === "true" ? "700" : "normal"};
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

export const ButtonLink = styled(ReachRouterLink)`
  background-color: red;
  border-radius: 3px;
  color: whitesmoke;
  text-decoration: none;
  padding: 0.2em 2em;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`

export const Text = styled.p`
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`

export const Feature = styled(Container)`
  flex-direction: column;
  align-items: normal;
  width: 50%;
	height: 70vh;
  @media (max-width: 1100px) {
    display: none;
  }
`

export const FeatureCallOut = styled.h2`
  color: white;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 130px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    background: #ff1e1e;
    color: white;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 700px) {
    display: none;
  }
`

export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;

`

export const SearchInput = styled.input`
  background-color: #44444459;
  color: white;
  border: 1px solid white;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;
  margin-left: ${({active}) => active === true ? "10px" : "0"};
  padding: ${({active}) => active === true ? "0 10px" : "0"};
  opacity: ${({active}) => active === true ? "1" : "0"};
  width: ${({active}) => active === true ? "200px" : "0"};
`

export const Picture = styled.button`
  background-image: url(${({src}) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
`

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: black;
  border-radius: 10px;
  padding: 20px;
  top: 32px;
  right: 0;
  width: 50px;

  ${Group} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }

  ${Group} {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }

    ${Link}, ${Picture} {
      cursor: default;
    }
  }

  p {
    font-size: 12px;
    text-align: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
