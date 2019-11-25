import styled from "styled-components";

export const Main = styled.div`
  flex-direction: row;
  display: flex;
  height: 550px;
  width: 100%;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  background-color: black;
`;

export const Link = styled.a`
  color: #09d3ac;
  font-size: 15px;
  text-decoration-line: none;
`;

export const Header = styled.div`
  width: 100%;
  text-align: center;
  align-items: center;
  color: white;
  padding-top: 40px;
  background-color: black;
  border-top: 1px solid;
  border-top-color: white;
`;

export const Title = styled.p`
  font-size: 30px;
  color: lightgrey;
  position: center;
`;

export const Description = styled.p`
  font-size: 15px;
  height: 60px;
  color: white;
  text-align: left;
`;

export const Card = styled.div`
  align-items: center;
  width: 950px;
  margin: 0 0px 50px 30px;
  padding-right: 50px;
  padding-left: 50px;

  img {
    border-radius: 15px;
  }
`;
