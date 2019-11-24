import styled from "styled-components";

export const Main = styled.div`
  flex-direction: row;
  display: flex;
  height: 550px;
  width: 100%;
  background-color: #282c39;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
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
  padding-bottom: 30px;
`;

export const Title = styled.p`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 30px;
  color: #09d3ac;
  position: center;
`;

export const Description = styled.p`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 15px;
  height: 90px;
  color: white;
  text-align: left;
`;

export const Card = styled.div`
  align-items: center;
  width: 600px;
  height: 400px;
  margin: 0 50px 50px 50px;
  padding: 0 50px 0 0;
  img {
    border-radius: 15px;
  }
`;
