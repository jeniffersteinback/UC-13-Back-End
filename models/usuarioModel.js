// Importando o módulo brcypt para criptografar senhas
import brcypt from 'brcypt'

// Inicializando uma lista de usuários (Em um cenário real, isso viria de um BD)
let usuario =  [
    // Exemplo de um usuário com senha criptografada
    {
        id: 1, //ID do usuário
        nome: 'Jeniffer Steinback',
        email: 'Godoy@gmail.com',
        senha: brcypt.hashSync('Senha1234', 10)
        // Senha gerada com o brcypt (O segundo parametro é o número de saltos para gerar o Hash)
    },
];

// Função para obter todos os usuários
export const getAllUsuarios = () => usuarios;

// Função para encontrar um usuário pelo e-mail
export const getUsuarioByEmail = (email) => {
    // Retorna o usuario
    return usuario.find((usuario) => usuario.email === email);
};

// Função para criar um novo usuário
export const creatUsuario = (novoUsuario) => {
    // Gera um novo ID para o usuário (Simulando um banco de dados com incremento)
    const novoId = usuarios.length + 1;

// Cria o novo usuario com dados fornecidos e senha criptografada
const usuario ={
    ...novoUsuario, //Copia os dados do novo usuario
    id: novoId, // Adiciona o ID gerado
    senha: brcypt.hashSync(novousuario.senha, 10), //Criptografiaa senha antes de armazenar 
};

// Adiciona o novo usuario a lista de usuarios 
usuario.push(usuario);

// Retorna o novo usuario criado
return usuario;

};

// Função para atualizar os dados de um usuario existente 
export const updateUsuario = (id, dadosAtualizados) => {
    // Procura o índice do usuario com o ID fornecido
    const usuarioIndex = usuarios.findIndex ((usuario) => usuario.id === id);

    // Se o usuario não for encontrado retorna Null
    if (usuarioIndex === -1) return null;

    // Atualiza os dados do usuario no indice encontrado (Combinando Dados antigos com os novos)
    usuarios[usuarioIndex] = { ...usuarios[usuarioIndex], ...dadosAtualizados };

    // Retorna o usuario atualizado
    return usuarios[usuarioIndex];
};

// Função para excluir um usuário pelo ID
export const deleteUsuario = (id) => {
    // Procura o índice do usuário a ser removido
    const usuarioIndex =  usuarios.findIndex((usuario) => usuario.id === id);

    // Se o usuario não for encontrado, retorna Null
    if (usuarioIndex === -1) return null;

    // Remove o usuario da lista (usando o método splice) e retorna o usuario removido
    const [usuarioRemovido] = usuarios.splice(usuarioIndex, 1);

    // Retorna o usuario que foi removido
    return usuarioRemovido;
};
