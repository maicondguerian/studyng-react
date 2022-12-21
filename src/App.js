import "./App";
import "./App.css";
import Snow from "./components/img/snow.png";
import Char from "./components/img/char1.png";
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Me from "./components/Me";
import Styles from "./components/Me.module.css"

function App() {
  const name = " Maicon dGuerian";
  let occupation = ["dev Fullstack", " Dev jr"];
  const newName = name.toUpperCase();
  const humor = " since yesterday";
  const humorUpper = humor.toUpperCase();
  const personAge = " 27";

  let salario = () => {
    return "7,000";
  };

  return (
    <div className="App">
      <img src={Char} alt="img" />
      <h1>Maicon</h1>
      <Me 
        name={name}
        age={personAge}
        post={occupation[1]}
        img="https://via.placeholder.com/150"
      />
      <SayMyName nome=" e estou gostando!" />
      <SayMyName nome=" and enjoying a lot!" />
      <SayMyName nome={humorUpper} />
      <HelloWorld />
      <p>{"Nome: " + newName}</p>
      <p>{"Profissão: " + occupation}</p>
      <p>{"Salário: " + salario()}</p>
      <img id="snow" src={Snow} alt="img" />
    </div>
  );
}

export default App;
