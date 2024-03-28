const clientes = [
    {'id': 1, 'nome':'Vitor','email':'teste@example.com', 'telefone': '12 12345678'},
    {'id': 2, 'nome':'João','email':'teste@example.com', 'telefone': '12 12345678'},
    {'id': 3, 'nome':'Maria','email':'teste@example.com', 'telefone': '12 12345678'},
];

getClients = (req,res) => {
    res.status(200).send(clientes);
}

getOneClient = (req,res) => {
    let id = req.params.id;
    const cliente = clientes.find((item) => item.id === Number(id));
    if(cliente){
        res.status(200).send(cliente);
    }else{
        res.status(404).send("Não foi encontrado um cliente com esse ID");
    }
}

createClient = (req,res) => {
    const cliente = req.body;
    if(Object.keys(cliente).length>0){
        clientes.push(cliente);
        res.status(201).send(cliente);
    }else{
        res.status(406).send("Não foi possivel adicionar este cliente!");
    }
}

updateClient = (req,res) =>{
    let id = req.params.id
    let indice = findClientIndex(id);
    clientes[indice] = req.body;
    res.status(201).send("Cliente Atualizado com sucesso!");
}

findClientIndex = (id) => {
    const indice = clientes.findIndex((item) => item.id === Number(id));
    return indice;
}

removeClient = (req, res) => {
    let id = req.params.id;
    let indice = findClientIndex(id);
    clientes.splice(indice,1);
    res.status(200).send(`O Cliente de ID ${id} foi removido com sucesso!`);
}

module.exports = {getClients,getOneClient,createClient,updateClient,removeClient};