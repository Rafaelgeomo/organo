import {
  AiFillCloseCircle,
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai"; // importando o icone de deletar
import "./Colaborador.css";

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
  function favoritar(){
    aoFavoritar(colaborador.id);
  }

  const propsFavorito = { // para nao repetir faz uma const e coloca tudo o q tinha em duplicidade e passa o objeto para os componentes
    size: 25,
    onClick: favoritar
  }
  return (
    <div className="colaborador">
      <AiFillCloseCircle
        size={25}
        className="deletar"
        onClick={() => aoDeletar(colaborador.id)} //colocando arrow function faz com que aoDeletar so funcione ao clicar, senao ficaria uma função ja executada
      />
      <div
        className="cabecalho"
        style={{ backgroundColor: corDeFundo }}
      >
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <div className="favoritar">
          {colaborador.favorito 
            ? <AiFillHeart {...propsFavorito} color='#ff0000'/> // para passar um objeto usa a {} e um spred q seria os ... assim nao precisa ficar repetindo codigo
            : <AiOutlineHeart {...propsFavorito} />
          }
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
