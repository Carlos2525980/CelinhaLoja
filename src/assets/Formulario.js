function Enviar() {

    var n = document.getElementById('nome')

    var s = document.getElementById('sobrenome')

    var t = document.getElementById('telefone')

    var nome = Number(n.value)
    var sobrenome = Number(s.value)
    var telefone = Number(t.value)

    if (nome == "" || telefone == "" || sobrenome == "") {


        alert('Digite os campos corretamente!')


    } else {



        alert('Dados Enviados!')


    }


}
