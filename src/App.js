import './App.css';
import SideBar from './components/SideBar';
import ContentWrapper from './components/ContentWrapper';

function App() {
  return (
    
    <div id="wrapper">

      <SideBar/>
      <ContentWrapper/>

	  </div>
	/* End of Page Wrapper */

  );
}

export default App;

/* Estructura 
Todas las etiquetas deben tener una etiqueta de cierre
Componente app que contiene todo, contiene dos componentes hermanos que dependen de app,
uno es sideBar(margen gris izquierdo) y el otro es contentWrapper todo el resto del contenido del lado derecho.
Pero dentro de contentWrapper tengo mas componentes que dependen de el: topBar(header), contentRowTop(cuerpo) y el footer.
Al ir desmenuzando... en el contenedor padre quedará el nombre del componente hijo y le indicamos desde donde se importa*/

/* En la linea 189 hay una imagen que dentro de sus propiedades tiene una etiqueta
styles... (lo mas recomendable es que este en styles.css) esto traerá errores por eso hay que tratarla como un objeto: style={{width: "40rem"}}
a style le paso un objeto por eso los paréntesis y le indico que dentro estaré 
poniendo javascript. Y suponiendo que queremos poner mas estilos,
podemos hacerlo en el mismo objeto, pero llamaremos a las propiedades con camelCasse (backgroundColor) */
