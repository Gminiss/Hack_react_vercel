let usuarios = [];

export const agregarUsuario = (nombre, correo, edad) => {
    usuarios.push({ nombre, correo, edad });
};

export const mostrarUsuarios = () => {
    return usuarios.map(usuario => ({
        ...usuario,
        nombre: usuario.nombre.length > 10 ? usuario.nombre.substring(0, 10) + '...' : usuario.nombre,
    }));
};

export const contarUsuarios = () => {
    return usuarios.length;
};

export const eliminarUsuario = (nombre) => {
    usuarios = usuarios.filter(usuario => usuario.nombre !== nombre);
};