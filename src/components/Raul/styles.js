import styled from "styled-components";
import bgbk from "../../assets/bgbk.jpg";

export const Main = styled.div`
  flex-direction: row;
  display: flex;
  height: 550px;
  width: 100%;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const Bg = styled.div`
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
  padding-top: 30px;
  color: white;
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
  text-align: left;
  height: 100px;
  color: white;
  padding-bottom: 10px;
`;

export const Card = styled.div`
  align-items: center;
  width: 600px;
  height: 400px;
  margin: 0 0px 50px 0px;
  padding-right: 50px;
  padding-left: 50px;

  img {
    border-radius: 10px;
  }
`;
