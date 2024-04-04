import Colaborador from "../Colaborador";
import "./Time.css";
import hexToRgba from "hex-to-rgba";

const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {
  return (
    colaboradores.length > 0 && (
      <section
        className="time"
        style={{
          backgroundImage: "url(/imagens/fundo.png)",
          backgroundColor: hexToRgba(time.cor, '0.6'), // hexToRgba com o '0.6' faz com que mude a opacidade da cor de fundo.
        }}
      >
        <input onChange={evento => mudarCor(evento.target.value, time.nome)} value={time.cor} type="color" className="input-cor"/>
        <h3 style={{ borderColor: time.cor}}>
          {time.nome}
        </h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador, indice) => {
            return (
              <Colaborador
                key={indice}
                colaborador={colaborador}
                corDeFundo={time.cor}
                aoDeletar={aoDeletar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;

// Analogia com Impressora e Papel em Branco:

// Papel em Branco (Inicialização do Estado):
// Quando você utiliza const [state, setState] = useState(''), é como obter um papel em branco da impressora (useState) pronto para ser preenchido.

// Impressora (onChange):
// O evento onChange é como a impressora que começa a imprimir no papel em branco (setState). Esse evento é acionado quando há uma mudança (digitação, por exemplo) no input.

// Preenchimento do Papel (Atualização do Estado):
// Quando a impressora termina de imprimir, o papel deixa de ser em branco e agora contém informações (o valor atual). No React, state é como o papel preenchido que contém as informações mais recentes.

// Leitura do Papel (Acesso ao Estado):
// Para acessar as informações que foram impressas, você lê o papel. No React, você acessa o valor mais recente do estado usando state.

// Atualização do Papel (Próxima Impressão):
// Se você quiser imprimir algo diferente, você pode usar setState para obter um novo papel em branco pronto para ser preenchido pela impressora novamente.

