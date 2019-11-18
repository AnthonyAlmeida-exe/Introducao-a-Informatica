import styled from "styled-components";

export const Main = styled.div`
  flex-direction: row;
  display: flex;
  height: 500px;
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
`;
export const Card = styled.div`
  width: 600px;
  height: 500px;
  margin: 0 30px 50px 50px;
  padding-right: 50px;
  border-right: 1px solid;
  border-left-width: 50px;
  border-left-color: #fc0fc0;
`;
