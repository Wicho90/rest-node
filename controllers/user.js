const personas =  [
    {
        nombre: 'Luis',
        apellido: 'Ochoa'
    },
    {
        nombre: 'Victor',
        apellido: 'Ochoa'
    },
    {
        nombre: 'Alberto',
        apellido: 'Muñoz'
    },
    {
        nombre: 'Josefo',
        apellido: 'Perez'
    },
    {
        nombre: 'Jonh',
        apellido: 'Doe'
    }
];

const usuarioListar = (req, res) => {
    res.json(personas);
}

const usuarioPorId = (req, res) => {
    const id = req.params.id;
    res.json(personas[id]);
}

const usuarioCrear = (req, res) => {
    const persona = req.body;
    personas.push(persona);
    res.status(201).json(persona);
}

const usuarioEditar = (req, res) => {
    const id = req.params.id;
    const persona = req.body;
    personas[id] =persona
    res.status(201).json(personas[id]);
}

const usuarioEliminar = (req, res) => {
    const id = req.params.id;
    personas.splice(id, 1);
    res.status(204).send();
}

module.exports = {
    usuarioListar,
    usuarioPorId,
    usuarioCrear,
    usuarioEditar,
    usuarioEliminar
}