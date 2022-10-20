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
        <img src={VoltbrasLogo} alt="logo" />
        <div>
          <h1>Voltbras App</h1>
          <h2>Pokemon Manager</h2>
        </div>
      </Logo>
      <MenuOptions>
        <Option>
          <div className="active">
            <img src={MenuBar} alt="" />
          </div>
          <p className="active-text">Lista</p>
        </Option>
        <Option>
          <div>
            <img src={Conquista} alt="" />
          </div>
          <p>Conquista</p>
        </Option>
        <Option>
          <div>
            <img src={Pokedex} alt="" />
          </div>
          <p>Pokedex</p>
        </Option>
        <Option>
          <div>
            <img src={Ajuda} alt="" />
          </div>
          <p>Ajuda</p>
        </Option>
        <Option>
          <div>
            <img src={Configuracao} alt="" />
          </div>
          <p>Configuração</p>
        </Option>
      </MenuOptions>
    </Container>
  );
}
