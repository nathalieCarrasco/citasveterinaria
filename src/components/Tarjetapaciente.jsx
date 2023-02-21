import React from 'react'
import { useEffect } from 'react';

const Tarjetapaciente = ({paciente,setPaciente,eliminarPaciente}) => {


     const {nombre,dueño,email,alta,sintomas,id}=paciente;

     const handleEliminar=()=>{
        //console.log('eliminando' , id)
        const respuesta = confirm('deseas eliminar al paciente ?' )
        if (respuesta){
            eliminarPaciente(id);
        }
     }
 /*    useEffect(()=>{
        console.log('el componente esta listo')
       },[])
        */
  return (
    <div>
        <div className="bg-white shadow-md py-10 px-5 mb-10 mx-5 rounded-xl">
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Nombre: {''}
                    <span className="font-normal normal-case">{nombre}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Dueño: {''}
                    <span className="font-normal normal-case">{dueño}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Email: {''}
                    <span className="font-normal normal-case">{email}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Fecha alta: {''}
                    <span className="font-normal normal-case">{alta}</span>
                </p> 
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Sintomas: {''}
                    <span className="font-normal normal-case"> {sintomas}</span>
                </p>

                <div className='flex justify-around mt-10'>
                    <button
                    type="button"
                    className='p-3 mx-2 bg-indigo-600 hover:bg-indigo-800 text-white
                    font-bold uppe
                    rounded-lg'
                    onClick={()=>setPaciente(paciente)}
                    >Editar</button>

<button
                    type="button"
                    className='p-3 mx-2 bg-red-600 hover:bg-red-700 text-white
                    font-bold uppe
                    rounded-lg'
                    onClick={handleEliminar} 
                    >Eliminar</button>
                </div>
            </div>


    </div>
  )
}

export default Tarjetapaciente;