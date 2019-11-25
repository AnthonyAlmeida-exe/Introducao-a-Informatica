import styled from "styled-components";

export const Main = styled.div`
  flex-direction: row;
  display: flex;
  height: 550px;
  width: 100%;
  background-color: black;
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
  padding: 20px 0 30px 0;
  background-color: black;
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
  height: 90px;
  color: white;
  text-align: left;
`;

export const Card = styled.div`
  align-items: center;
  width: 600px;
  height: 400px;
  margin: 0 50px 0px 0px;
  padding-right: 50px;
  padding-left: 50px;
  img {
    border-radius: 15px;
  }
`;
