import './App.css';
import SideBar from './components/SideBar';
import ContentWrapper from './components/ContentWrapper';

/* El title y los links del head fueron llevados al index.html de public */

function App() {
  return (
<div id="wrapper">
  <SideBar/>
  <ContentWrapper/>

</div>
  );
}

export default App;

/* En la linea 116 hay una imagen que dentro de sus propiedades tiene una etiqueta
styles... esto traerá errores por eso hay que tratarla como un objeto: style={{width: "40rem"}}
a style le paso un objeto por eso los paréntesis y le indico que dentro estaré 
poniendo javascript. Y suponiendo que queremos poner mas estilos,
podemos hacerlo en el mismo objeto, pero llamaremos a las propiedades con camelCasse (backgroundColor)*/
