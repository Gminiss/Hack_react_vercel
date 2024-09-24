import React, { useState } from 'react';
import { agregarUsuario, mostrarUsuarios, contarUsuarios, eliminarUsuario } from './usuarios';

const UsuarioManager = () => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [edad, setEdad] = useState('');
    const [usuarios, setUsuarios] = useState(mostrarUsuarios());

    const handleAgregar = () => {
        agregarUsuario(nombre, correo, edad);
        setUsuarios(mostrarUsuarios());
        setNombre('');
        setCorreo('');
        setEdad('');
    };

    const handleEliminar = (nombre) => {
        eliminarUsuario(nombre);
        setUsuarios(mostrarUsuarios());
    };

    return (
        <div>
            <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre"
            />
            <input
                type="email"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                placeholder="Correo"
            />
            <input
                type="number"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
                placeholder="Edad"
            />
            <button onClick={handleAgregar}>Agregar Usuario</button>
            <h2>Total de usuarios: {contarUsuarios()}</h2>
            <ul>
                {usuarios.map((usuario, index) => (
                    <li key={index}>
                        {usuario.nombre} - {usuario.correo} - {usuario.edad} años
                        <button onClick={() => handleEliminar(usuario.nombre)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsuarioManager;
