import React from "react";
import { Header, Main, Card, Title, Description, Link, Bg } from "./styles.js";

import Gif1 from "../../assets/backup.gif";
import Gif2 from "../../assets/bkincremental.png";
import BKD from "../../assets/backup-diferencial.png";
import BKIC from "../../assets/bkincremental.png";
import protecao from "../../assets/protecao.png";

const Raul = () => (
  <Bg>
    <Header>
      <h1>Backups</h1>
      <Link href="https://www.youtube.com/watch?v=kD-j8WBYrA0">
        Aplicação Tecnológica
      </Link>
    </Header>
    <Main>
      <Card>
        <Title>Backup Completo</Title>
        <Description>
          O backup completo é aquele no qual se realiza a cópia de todos os
          arquivos de determinado ambiente ou servidor, para outro local de
          armazenamento, seja local, virtual ou em nuvem.
        </Description>
        <img src={Gif1} />
      </Card>
      <Card>
        <Title>Backup Incremental</Title>
        <Description>
          O backup incremental faz uma cópia dos dados alterados desde o último
          backup incremental, portanto copia uma quantidade menor de dados para
          o local escolhido, necessitando de menor espaço de armazenamento.
        </Description>
        <img src={Gif2} />
      </Card>
      <Card>
        <Title>Backup Diferencial</Title>
        <Description>
          O diferencial é semelhante ao incremental. Porém, os dados copiados
          são os alterados em relação ao último Backup Completo, armazenando
          mais dados do que o incremental.
        </Description>
        <img src={BKD} />
      </Card>
      <Card>
        <Title>Incremental Contínuo</Title>
        <Description>
          Backup incremental contínuo Esta é uma nova modalidade de backup e que
          tem sido bastante utilizada pelas empresas mais atualizadas. Ele é bem
          semelhante ao incremental, porém, seu diferencial está na
          disponibilidade dos dados.
        </Description>
        <img src={BKIC} />
      </Card>
      <Card>
        <Title>Proteção</Title>
        <Description>
          Backup incremental contínuo Esta é uma nova modalidade de backup e que
          tem sido bastante utilizada pelas empresas mais atualizadas. Ele é bem
          semelhante ao incremental, porém, seu diferencial está na
          disponibilidade dos dados.
        </Description>
        <img src={protecao} />
      </Card>

      <Card>
        <Title>Proteção</Title>
        <Description>
          Backup incremental contínuo Esta é uma nova modalidade de backup e que
          tem sido bastante utilizada pelas empresas mais atualizadas. Ele é bem
          semelhante ao incremental, porém, seu diferencial está na
          disponibilidade dos dados.
        </Description>
        <iframe
          width="400"
          height="300"
          src="https://www.youtube.com/embed/kD-j8WBYrA0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Card>
    </Main>
  </Bg>
);
export default Raul;
