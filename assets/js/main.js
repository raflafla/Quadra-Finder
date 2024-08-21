function verify(e){
    e.preventDefault();
    const usuario = {
        nome: "",
        senha: "",
    }
    usuario.nome = e.target.user.value
    usuario.senha = e.target.password.value
    let user1 = "rafael"
    let pass1 = "rafael1533"
    if(usuario.nome == user1 && usuario.senha == pass1){
        console.log("Sucesso!")
    }
    else{
        console.log("Erro!")
    }
}


    function verifyCadastro(e){
    e.preventDefault();

    const usuario = {
        nome:"", mae:"", cpf:"",
        rg:"", data:"", rua:"",
        numero:"", bairro:"", comple:"",
        estado:"", cidade:"", cep:"",
        descri:"", email:"", senha:"",
        telefone:"",
    };

     usuario.nome = e.target.nome.value;
     usuario.mae = e.target.mae.value;
     usuario.cpf = e.target.cpf.value;
     usuario.rg = e.target.rg.value;
     usuario.data = e.target.data.value;

     usuario.rua = e.target.rua.value;
     usuario.numero = e.target.numero.value;
     usuario.bairro = e.target.bairro.value;
     usuario.comple = e.target.comple.value;
     usuario.estado = e.target.estado.value;
     usuario.cidade = e.target.cidade.value;
     usuario.cep = e.target.cep.value;
     usuario.descri = e.target.descri.value;

     usuario.email = e.target.email.value;
     usuario.senha = e.target.senha.value;
     usuario.telefone = e.target.telefone.value;


    console.log("nome:", usuario.nomes)
    console.log("mae:", usuario.mae)
    console.log("cpf:", usuario.cpf)
    console.log("rg:", usuario.rg)
    console.log("data:",usuario.data)
    console.log("rua:", usuario.rua)
    console.log("numero:", usuario.bairro)
    console.log("comple", usuario.comple)
    console.log("estado:", usuario.estado)
    console.log("cidade:", usuario.cidade)
    console.log("cep:", usuario.cep)
    console.log("descri:", usuario.descri)
    console.log("email:", usuario.email)
    console.log("senha:", usuario.senha)
    console.log("telefone:", usuario.telefone)

}



