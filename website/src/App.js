import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [tarefas, setarTarefas] = useState([
    /* {
      id: 0,
      tarefa: 'Minha tarefa do dia',
      finalizada: true
    },
    {
      id: 0,
      tarefa: 'Minha tarefa do dia 2',
      finalizada: false
    } */
  ]);

  useEffect(() => {
    //Podemos chamar uma API aqui
  }, []);

  const [modal, setModal] = useState(false);

  const salvarTarefa = () => {
    //TODO: Salvar a tarefa
    let tarefa = document.querySelector("#content-tarefa");

    setarTarefas([
      ...tarefas,
      {
        id: new Date().getTime(),
        tarefa: tarefa.value,
        finalizada: false,
      },
    ]);
    setModal(false);
  };

  const marcarConcluida = (id) => {
    let novasTarefas = tarefas.filter((val) => {
      if (val.id === id) {
        val.finalizada = true;
      }
      return val;
    });

    setarTarefas(novasTarefas);
  };

  const abrirModal = () => {
    setModal(!modal); //case true {return false}, case false {return true}
  };

  return (
    <div className="App">
      {modal ? (
        <div className="modal">
          <div className="modalContent">
            <h3>Adicionar sua tarefa</h3>
            <input id="content-tarefa" type="text" />
            <button onClick={() => salvarTarefa()}>Salvar</button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div onClick={() => abrirModal()} className="addTarefa">
        <p> + </p>
      </div>
      <div className="boxTarefas">
        <h2>Minhas Tarefas do Dia</h2>
        {tarefas.map((val) => {
          if (!val.finalizada) {
            return <p onClick={() => marcarConcluida(val.id)}>{val.tarefa}</p>;
          } else {
            return (
              <p style={{ textDecoration: "line-through" }}>{val.tarefa}</p>
            );
          }
        })}
      </div>
    </div>
  );
}

export default App;
