import { Option, Logo, MenuOptions, Container } from "./style";
import VoltbrasLogo from "../../assets/logo.png";
import Ajuda from "../../assets/ajuda.png";
import Conquista from "../../assets/conquista.png";
import Configuracao from "../../assets/configuracao.png";
import MenuBar from "../../assets/menu.png";
import Pokedex from "../../assets/pokedex.png";

export function Menu() {
  return (
    <Container>
      <Logo>
        <img src={VoltbrasLogo} alt="logo da Voltbras" />
      </Logo>
      <MenuOptions>
        <Option>
          <div className="active">
            <img src={MenuBar} alt="menu" />
          </div>
          <p className="active-text">Lista</p>
        </Option>
        <Option>
          <div>
            <img src={Conquista} alt="conquista" />
          </div>
          <p>Conquista</p>
        </Option>
        <Option>
          <div>
            <img src={Pokedex} alt="Pokedex" />
          </div>
          <p>Pokédex</p>
        </Option>
        <Option>
          <div>
            <img src={Ajuda} alt="Ajuda" />
          </div>
          <p>Ajuda</p>
        </Option>
        <Option>
          <div>
            <img src={Configuracao} alt="Configuracao" />
          </div>
          <p>Configuração</p>
        </Option>
      </MenuOptions>
    </Container>
  );
}
