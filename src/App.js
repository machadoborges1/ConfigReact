//Componente é uma função que retorna HTML

/**
 * Componente
 * Propriedade
    Passar de um componente pai, para um filho
 * Estado e imutabilidade
    imutabilidade: não se pode mutar variáveis, alterar seu formato.Incluir ou escluiir informaçoes

 */

import React, {useState, useEffect} from "react";
import api from "./services/api";
import Header from "./components/Header";
import "./App.css";
import backgroundImage from './assets/background.jpeg';

function App() {

  const [projects, setProjects] = useState([]); 
  //useState retorna um array com duas posiçoes
  //1- variavel com valor inicial 2- variavel que será adicionado

  useEffect(() => {
    api.get('./projects').then(response => {
      //console.log(response)
      setProjects(response.data);
    } )
    //O método then() retorna uma Promise. Possui dois argumentos, ambos são
    // "call back functions", sendo uma para o sucesso e outra para o fracasso da promessa.
  
  }, []);
  //disparar função sempre que tiver uma informação alterada
  //1- parametro - qual funão eu quero disparar
  //2- quando eu quero disparar.
  //Exemplo: se quero que ela dispare toda vez que a variavel 'projects' for alterada... coloco 'projects' no segundo []
  //Exemplo: Apenas uma vez eu deixo o array vazio

  async function handleAddProject(){
    //projects.push(`New project ${Date.now()}`);  ---  Não respeita a imutabilidade
    //setProjects([...projects, `New project ${Date.now()}`]);
    //console.log(projects);

    const response = await api.post('projects', { //ultiliza await para o mesmo response serusado em mais de um local
      title: `New project ${Date.now()}`,
      owner: "Humberto Macahdo ",
    });

    const project = response.data;
    setProjects([... projects, project])
  }

  return(
    <> 
      <Header title='isso é propriedade'/>
      <img width={10} src={backgroundImage} />
      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>
      <Header title='Projects'>
        <ul>
          <li>lista</li>
          <li>aqui! cade carai</li>
        </ul>
      </Header>
      <button type="button" onClick={handleAddProject}>adicionar projeto</button>
    </> //fragment //fragmento
  );
}

export default App;