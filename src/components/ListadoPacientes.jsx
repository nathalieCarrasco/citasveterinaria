/* import { useEffect } from "react"; */
import Tarjetapaciente from "./Tarjetapaciente";


function ListadoPacientes({ pacientes,setPaciente ,eliminarPaciente}) {
  //asegura que estan llegando correctamente
  //console.log(pacientes.length)


/*   useEffect(()=>{
    if(pacientes.length>0)
    {console.log('se ah ingresado un nuevo paciente')}
 
  }, [pacientes]) */
/* comprobaremos si el listado esta vacio para que muestre un cuadro dinamicamente  */
  return (
    
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">

    {pacientes && pacientes.length ?(
        <>
        <h2 className="font-black text-xl text-center">Listado pacientes</h2>
      <p className="text-lg text-center mb-10 mt-5">
        Administra tus{" "}
        <span className="text-indigo-700 font-bold  text-lg">
          Pacientes y Citas
        </span>
      </p>
        </>
    ): (
        <>
        <h2 className="font-black text-xl text-center">NO EXISTEN PACIENTES EN LISTA.</h2>
        <p className="text-lg text-center mb-10 mt-5">
        <span className="text-indigo-700 font-bold  text-lg">
          agrega tus pacientes para comenzar.
        </span>
      </p>
        </>
    )}

      

      {/* // Estoy pasando los pacientes de manera estatica  */}
      {pacientes.map((paciente ) => {
        return <Tarjetapaciente 
        key={paciente.id} 
        paciente={paciente}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente} />;
      })}
    </div>
  );
}

export default ListadoPacientes;
