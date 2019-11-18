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
  height: 100px;
  color: white;
`;
export const Card = styled.div`
  width: 500px;
  margin: 0 0 0 50px;
`;
export const Pastas = styled.div`
  width: 500px;
  margin: 0 0 0 50px;
`;
export const Arquivos = styled.div`
  width: 500px;
  margin: 0 0 0 50px;
`;
export const Formatos = styled.div`
  width: 500px;
  margin: 0 0 0 50px;
`;
export const Biblioteca = styled.div`
  width: 500px;
  margin: 0 0 0 50px;
`;
export const Classifier = styled.div`
  width: 500px;
  margin: 0 0 0 50px;
`;
