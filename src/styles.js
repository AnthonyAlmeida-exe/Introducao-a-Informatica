import styled from "styled-components";

export const Main = styled.div`
  text-align: center;
  align-items: center;
  width: 100%;
  img {
    height: 40vmin;
  }
  ul {
    list-style: none;
    padding-left: 0px;
  }
  h2 {
    margin: 0px 0px 0px 0;
  }
  li {
  }
`;

export const Header = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  color: white;
`;
export const Presentation = styled.div`
  width: 100%;
  height: auto;
`;
export const Menu = styled.div`
  width: 250px;
  height: 250px;
  background-color: red;
`;
