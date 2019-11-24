import React from "react";
import { Main, Link, Title, Description, Header, Card } from "./styles.js";
import Gif1 from "../../assets/Gif1.gif";
import Gif2 from "../../assets/Gif2.gif";
import Gif3 from "../../assets/Gif3.gif";
import Formatos from "../../assets/Formatos.png";
import BibliotecaImg from "../../assets/Biblioteca.jpeg";

const Anthony = () => (
  <>
    <Header>
      <h1>Manipulação de Arquivos</h1>
      <Link href="https://github.com/AnthonyAlmeida-exe/Introducao-a-Informatica">
        Aplicação Tecnológica
      </Link>
    </Header>
    <Main>
      <Card>
        <Title>Pastas</Title>
        <Description>
          Objeto que é usado para agrupar e proteger documentos soltos em um
          gerenciador de arquivos.
        </Description>
        <img src={Gif1} />
      </Card>
      <Card>
        <Title>Arquivos</Title>
        <Description>
          Arquivo é um conjunto de documentos criados ou recebidos pelo usuário
          em um gerenciador.
        </Description>
        <img src={Gif2} />
      </Card>
      <Card>
        <Title>Bibliotecas</Title>
        <Description>
          Uma biblioteca é um recurso que aponta para os locais onde estão
          armazenados seus arquivos. A biblioteca reúne todos os arquivos e
          pastas de uma mesma categoria.
        </Description>
        <img src={BibliotecaImg} />
      </Card>
      <Card>
        <Title>Formatos</Title>
        <Description>
          O MP3 foi um dos primeiros tipos de compressão de áudio com perdas
          quase imperceptíveis ao ouvido humano.
        </Description>
        <img src={Formatos} />
      </Card>
      <Card>
        <Title>Classifier</Title>
        <Description>
          É um script simples, escrito em python, que promete organizar,
          instantaneamente, seus arquivos, com base na extensão do mesmo, em
          diferentes diretórios categorizados.
        </Description>
        <img src={Gif3} />
      </Card>
    </Main>
  </>
);

export default Anthony;
