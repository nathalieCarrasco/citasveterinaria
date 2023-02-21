import { useState ,useEffect} from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  const [pacientes,setPacientes]= useState([]);
  const [paciente,setPaciente]=useState({});
/*   guardar en localStorage pero antes solo guarda string por ende convertir el arreglo a esto
  --------------useEffect & localStorage------------------
   */
   useEffect(()=>{
    const obtenerLS = ()=>{
      const pacientesLS= JSON.parse(localStorage.getItem('pacientes')) ?? [];
      //console.log(pacientesLS)
      setPacientes(pacientesLS);
    }

    obtenerLS();
   },  []);

   useEffect(()=>{
   // console.log('compoonenteee listo o cambio pacientes')
   localStorage.setItem('pacientes', JSON.stringify(pacientes));
   }, [pacientes]);


   const eliminarPaciente =(id)=>{
    //console.log('eliminando el paciente' , id);
    const pacientesActualizados=pacientes.filter(paciente=>paciente.id!==id)

   //console.log(pacientesActualizados)
   setPacientes(pacientesActualizados);
  }
  

  return (
    <div className="container mx-auto mt-5 ">
      <Header></Header>

      <div className='mt-12 md:flex'>
        <Formulario
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        ></Formulario>
        <ListadoPacientes
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
        ></ListadoPacientes>
      </div>
    </div>
  )
}

export default App
