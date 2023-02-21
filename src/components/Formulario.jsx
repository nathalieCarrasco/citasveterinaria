import {useState,useEffect} from 'react';
import Error from './Error';

function Formulario({pacientes,setPacientes,paciente}){
    //LOS HOOKS SOLAMENTE SE PUEDEN LLAMAR DENTRO DELA FUNCION DEL COMPONENTE
    const [nombre,setNombre]=useState('');
    const [dueño,setDueño]=useState('');
    const [email,setEmail]=useState('');
    const [alta,setAlta]=useState('');
    const [sintomas,setSintomas]=useState('');

    const [error,setError]=useState(false);

   /*  useEffect */

   useEffect(()=>{
    //console.log(paciente)
    /* console.log(Object.keys(paciente).length> 0 ) */
    if(Object.keys(paciente).length> 0 ){
        setNombre(paciente.nombre)
        setDueño(paciente.dueño)
        setEmail(paciente.email)
        setAlta(paciente.alta)
        setSintomas(paciente.sintomas)


    }
   }, [paciente])

 

   // console.log(paciente);

    const generarId=()=>{
        const fecha = Date.now().toString(36);
        const random = Math.random().toString(36).substring(2);

        return random + fecha ;
    }   

    // validacion de formulario
        const handleSubmit=(e)=>{
            e.preventDefault();

            if([nombre,dueño,email,alta,sintomas].includes('')){
                console.log('Hay Al menos un campo vacio')
                setError(true);
                return;
            }

            setError(false);

            //Construimos el objeto de paciente que le enviaos desde 
            //Formulario a app.jsx
           //setPacientes(nombre);
            const objetoPaciente={
                nombre,
                dueño,
                email,
                alta,
                sintomas,
                id:generarId()
            }

            if(paciente.id){
                //editando el registro
                objetoPaciente.id=paciente.id
                //console.log(objetoPaciente);
                //console.log(paciente);

                const pacientesActualizado=pacientes.map(pacienteState =>pacienteState.id === paciente.id ? objetoPaciente: pacienteState )

                setPacientes(pacientesActualizado);
            }else{ 
                
                //GENERANDO SU ID UNICO 
                objetoPaciente.id=generarId();
                //Creando un nuevo registro
                setPacientes([...pacientes,objetoPaciente]);
               
            }

           // console.log(objetoPaciente);
          /*   tomamos una copia y pasamos los pacientes 
            nunca tomar el original */
            //setPacientes([...pacientes,objetoPaciente]);


          /*  REINICIAR ____FORM___ reiniciamos el formulario para que se muestre vacio 
            al agregar un nuevo paciente  */

            setNombre('');
            setDueño('');
            setEmail('');
            setAlta('');
            setSintomas('');

           //console.log('enviando formulario..') 
        }
    //setNombre("lucass")
    //console.log(nombre);
    return (
        <div className="md:w-1/2 lg:w-2/5 mx-10 ">
            <h2 className="font-black text-xl text-center">Seguimiento de Pacientes</h2>
            <p className="mt-5 text-center mb-10 text-lg">
                Añade Pacientes y {""}
                <span className="text-indigo-700 font-bold text-lg ">Administralos</span>
            </p>

            <form 
            onSubmit={handleSubmit}
            className="bg-white shadow-md 
                        py-10 px-5 mb-10 ">
            {error && <Error 
                mensaje='Todos los campos son Obligatorios .'

            />}

                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700  uppercase font-bold "> Nombre de Mascota 
                    </label>

                    <input 
                        id="mascota"
                        type="text"
                        placeholder="Escribe el nombre de tu mascota"
                        className="border-2 w-full mt-2 p-2 placeholder-gray-700"
                        onChange={(e)=>setNombre(e.target.value)}
                        value={nombre}
                    />

                    
                </div>

                <div className="mb-5">
                    <label htmlFor="dueño" className="block text-gray-700  uppercase font-bold "> Nombre de la Persona Responsable 
                    </label>

                    <input 
                        id="dueño"
                        type="text"
                        placeholder="Escribe tu nombre"
                        className="border-2 w-full mt-2 p-2 placeholder-gray-700"
                        onChange={(e)=>setDueño(e.target.value)}
                        value={dueño}

                    />

                    
                </div>

                <div className="mb-5">
                    <label htmlFor="correo" className="block text-gray-700  uppercase font-bold "> Correo Electronico
                    </label>

                    <input 
                        id="email"
                        type="email"
                        placeholder="Escribe tu correo"
                        className="border-2 w-full mt-2 p-2 placeholder-gray-700"
                        onChange={(e)=>setEmail(e.target.value)}
                        value={email}

                    />

                    
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700  uppercase font-bold "> Fecha de Alta Medica
                    </label>

                    <input 
                        id="alta"
                        type="date"
                        className="border-2 w-full mt-2 p-2 placeholder-gray-700"
                        onChange={(e)=>setAlta(e.target.value)}
                        value={alta}

                    />

                    
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700  uppercase font-bold ">Sintomas 
                    </label>

                  <textarea id="sintomas" className="border-2 w-full mt-2 p-2 placeholder-gray-700"
                  placeholder="Describe los Sintomas"
                  onChange={(e)=>setSintomas(e.target.value)}
                        value={sintomas}></textarea>

                    
                </div>

                <input
                type="submit"
                className="w-full bg-blue-600 text-orange-50 p-3 uppercase
                font-bold hover:bg-blue-700 transition-all"
                value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'} 
                />

                
            </form>
        </div>
    )
}

export default Formulario;