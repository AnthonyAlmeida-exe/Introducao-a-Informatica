import React from "react";
import { Main, Link, Title, Description, Header, Card } from "./styles.js";
import Renan1 from "../../assets/Renan1.webp";
import Renan2 from "../../assets/Renan2.png";
import Renan03 from "../../assets/Renan03.png";
import Renan04 from "../../assets/Renan04.jpg";

const Renan = () => (
  <>
    <Header>
      <h1>Diretórios</h1>
      <Link href="https://github.com/AnthonyAlmeida-exe/Introducao-a-Informatica">
        Aplicação Tecnológica
      </Link>
    </Header>
    <Main>
      <Card>
        <Title>Diretório</Title>
        <Description>
          Local de armazenamento lógico (não físico), onde há relacionamento de
          arquivos arquivados.
        </Description>
        <img src={Renan1} />
      </Card>
      <Card>
        <Title>Utilizando Comandos</Title>
        <Description>Exemplo em Terminal.</Description>
        <img src={Renan2} />
      </Card>
      <Card>
        <Title>Organização de diretórios</Title>
        <Description>
          Armazenar os diferentes tipos de dados em diretórios separados,
          criando subdiretórios para os subtipos.
        </Description>
        <img src={Renan03} />
      </Card>
      <Card>
        <Title>Organização por Metas</Title>
        <Description>
          Usar diretórios para organizar suas metas globais e os pequenos passos
          para alcançar a meta em subdiretórios.
        </Description>
        <img src={Renan04} />
      </Card>
    </Main>
  </>
);

export default Renan;
